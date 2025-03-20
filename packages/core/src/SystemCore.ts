import { SendResponseDto } from './dtos/send-response.dto'
import { SendPayloadDto } from './dtos/send.dto'
import { receiveData } from './receiveData'
import { splitDataIntoChunks } from './utils'
import { EventEmitter } from './utils/EventEmitter'
import { generateRandomString } from './utils/ids'

class SystemCore extends EventEmitter {
  #pendingCommands = new Set<string>()
  #isReady: boolean
  #hasNotch: boolean = false
  #isFrame: boolean
  #finSdk: typeof window.finSdk | undefined
  #receiveLargeData: any

  constructor() {
    super()
    this.#isFrame = window !== window.parent
    this.#isReady =
      this.#isFrame || !!window.webkit?.messageHandlers?.callbackHandler || !!window.opener
    this.#finSdk = window.finSdk
    this.#subscribe()
  }

  get isReady() {
    return this.#isReady
  }

  get statusNotch() {
    return this.#hasNotch
  }

  public async send(payload: SendPayloadDto) {
    console.log('send', payload)
    if (typeof this.#finSdk !== 'undefined' || this.#finSdk) {
      return await this.#finSdk.call(payload)
    }
    if (!window?.webkit?.messageHandlers && !this.#isFrame)
      throw new Error('Your device is not deployed yet.')
    receiveData[payload.command] = -1
    payload.appId = window.appId
    payload.messageId = generateRandomString(8)
    this.#sendMessageToNative(payload)
    const data = await this.#postMessageToWindow(payload)
    console.log('await this.#postMessageToWindow(payload)', data)
    return await this.#postMessageToWindow(payload)
  }

  #sendChunks(command: string, data: string, isFrame = false) {
    if (!command || typeof command !== 'string') {
      throw new Error('Command must be a valid string')
    }

    const chunks = splitDataIntoChunks(data)
    console.log(`Sending ${chunks.length} chunks`)

    chunks.forEach(({ chunk, index, totalChunks }) => {
      const message = JSON.stringify({ type: 'large', chunk, index, totalChunks, command })
      this.#postMessage(message, isFrame)
    })
  }

  #postMessage(message: string, isFrame = false) {
    try {
      if (isFrame) {
        window.parent.postMessage(message, window.origin)
      } else if (
        typeof window?.webkit?.messageHandlers?.callbackHandler?.postMessage === 'function'
      ) {
        window.webkit.messageHandlers.callbackHandler.postMessage(message)
      } else {
        console.warn('WebKit message handler not found')
      }
    } catch (error) {
      console.error('Error sending message:', error)
    }
  }

  #sendMessageToNative(payload: SendPayloadDto) {
    try {
      const message = JSON.stringify(payload)
      if (message.length > 64000) {
        this.#sendChunks(payload.command, message)
      } else {
        const messageNormal = JSON.stringify({
          type: 'normal',
          data: message
        })
        this.#postMessage(messageNormal)
      }
    } catch (error) {
      console.error('Error sending message:', error)
    } finally {
      this.#pendingCommands.delete(payload.command.toString())
    }
  }

  #postMessageToWindow(payload: SendPayloadDto): Promise<SendResponseDto> {
    console.log('postMessageToWindow payload ===>', payload)
    return new Promise((resolve, reject) => {
      try {
        const receivedResponse = (res: SendResponseDto) => {
          console.log('#postMessageToWindow', res)
          resolve(res)
          console.log('#postMessageToWindow 666', res)
          this.removeEventListener(payload.command, receivedResponse)
        }
        console.log('postMessageToWindow payload 2 ===>', payload)
        this.on(payload.command, receivedResponse)
        window.opener?.postMessage(payload, '*')
      } catch (error) {
        reject(error)
      }
    })
  }

  #subscribe() {
    window.addEventListener('flutterInAppWebViewPlatformReady', () => {
      this.#isReady = true
      this.emit('ready')
    })

    window.require?.('electron')?.ipcRenderer.on('message', (_event: any, ...args: any[]) => {
      if (args[0]) {
        window.postMessage(args[0], '*')
      } else {
        window.postMessage(args, '*')
      }
    })

    window.addEventListener('message', (ev) => {
      try {
        const { data } = ev
        console.log('POST_MESSAGE_NATIVE_TO_WEB: ', data)
        if (!data) return
        const type = data.type ?? 'normal'

        let receiveMessage
        if (type === 'normal') {
          let result = data
          if (typeof result === 'string') {
            result = JSON.parse(result)
          }
          receiveMessage = result
        } else {
          const { chunk, index, totalChunks, command } = data
          if (
            !this.#receiveLargeData[command] ||
            Object.keys(this.#receiveLargeData).length === 0
          ) {
            if (index === 0) {
              this.#receiveLargeData[command] = {
                expectedChunks: totalChunks,
                receivedData: '',
                receivedChunks: 0
              }
            }
          }
          this.#receiveLargeData[command] = {
            ...this.#receiveLargeData[command],
            receivedData: this.#receiveLargeData[command].receivedData + chunk,
            receivedChunks: this.#receiveLargeData[command].receivedChunks + 1
          }
          if (
            this.#receiveLargeData[command].receivedChunks !==
            this.#receiveLargeData[command].expectedChunks
          ) {
            return
          }
          receiveMessage = JSON.parse(this.#receiveLargeData[command].receivedData)
          delete this.#receiveLargeData[command]
        }
        if (typeof data === 'string') {
          if (data.startsWith('backWorker|')) {
            return
          }
          return this.#handleJsonStringMessage(data, true)
        }
        if (data.cmd) {
          this.emit('listen-cmd', data)
          return
        }
        if (!data.isSocket) {
          if (data.command) {
            let cmd = receiveMessage.command
            if (receiveMessage && receiveMessage.messageId) {
              cmd = cmd + '_' + receiveMessage.messageId
            }
            const messageSending = receiveData[cmd]
            if (messageSending && typeof messageSending.resolve === 'function') {
              messageSending.resolve(receiveMessage.data)
              this.#pendingCommands.delete(receiveMessage.command)
            }
            return
          }
        }
        if (!receiveMessage) return
        this.emit(receiveMessage.command, receiveMessage.data)
      } catch (error) {
        console.error('<<<<CORE index.js [LEFN] Listen message catch>>>> ', error)
      }
    })
  }

  #handleJsonStringMessage(stringData: any, isListen?: any) {
    if (!stringData) {
      return
    }
    try {
      let res = stringData
      if (typeof res === 'string' && (res.indexOf('{') > -1 || res.indexOf('[') > -1)) {
        res = JSON.parse(stringData)
      }

      const command = res.command
      const response = res.data
      if (!command && !response) return

      if (response.success !== true) {
        if (isListen) {
          this.emit(command, res)
        }
        throw new Error(response.message)
      }
      if (isListen) {
        this.emit(command, res)
      }
      receiveData[command].resolve(res)
      this.#pendingCommands.delete(command)
      return res.data
    } catch (err) {
      console.error('Error handling JSON string message: ', err)
      throw err
    }
  }
}

const core = new SystemCore()
export { core as SystemCore }
