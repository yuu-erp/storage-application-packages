import { SendResponseDto } from './dtos/send-response.dto'
import { SendPayloadDto } from './dtos/send.dto'
import { splitDataIntoChunks } from './utils'
import { EventEmitter } from './utils/EventEmitter'
import { generateRandomString } from './utils/ids'
import { Logger } from './utils/Logger'

const MESSAGE_SIZE_LIMIT = 64000

interface ReceiveData {
  [key: string]: any
}

class SystemCore extends EventEmitter {
  #pendingCommands = new Set<string>()
  #isReady: boolean
  #hasNotch: boolean = false
  #isFrame: boolean
  #finSdk: typeof window.finSdk | undefined
  #receiveLargeData: any = {}
  #logger = new Logger('[SystemCore]')
  #receiveData: ReceiveData = {}

  constructor() {
    super()
    this.#isFrame = window !== window.parent
    this.#isReady =
      this.#isFrame || !!window.webkit?.messageHandlers?.callbackHandler || !!window.opener
    this.#finSdk = window.finSdk
    this.#subscribe()
    this.#logger.info('SystemCore initialized')
  }

  get isReady() {
    return this.#isReady
  }

  get statusNotch() {
    return this.#hasNotch
  }

  public async send(payload: SendPayloadDto) {
    payload.appId = window.appId
    payload.messageId = generateRandomString(8)
    const eventKey = `${payload.command}_${payload.messageId}`

    this.#logger.debug('Sending payload:', payload, 'with eventKey:', eventKey)

    if (this.#finSdk) {
      return await this.#finSdk.call(payload)
    }

    if (!window?.webkit?.messageHandlers && !this.#isFrame) {
      throw new Error('Your device is not deployed yet.')
    }

    this.#receiveData[eventKey] = -1
    this.#sendMessageToNative(payload)

    const response = await this.#postMessageToWindow(payload, eventKey)
    return response
  }

  #sendChunks(command: string, data: string, isFrame = false) {
    if (!command || typeof command !== 'string') {
      throw new Error('Command must be a valid string')
    }

    const chunks = splitDataIntoChunks(data)
    this.#logger.debug(`Sending ${chunks.length} chunks for command: ${command}`)

    chunks.forEach(({ chunk, index, totalChunks }) => {
      const message = JSON.stringify({ type: 'large', chunk, index, totalChunks, command })
      this.#postMessage(message, isFrame)
    })
  }

  #sendMessageToNative(payload: SendPayloadDto) {
    try {
      const message = JSON.stringify(payload)
      if (message.length > MESSAGE_SIZE_LIMIT) {
        this.#logger.warn('Message too large, splitting into chunks')
        this.#sendChunks(payload.command, message)
      } else {
        const messageNormal = JSON.stringify({ type: 'normal', data: message })
        this.#postMessage(messageNormal)
      }
    } catch (error) {
      this.#logger.error('Error sending message:', error)
    } finally {
      this.#pendingCommands.delete(payload.command.toString())
    }
  }

  #postMessage(message: string, isFrame = false) {
    try {
      this.#logger.debug('#postMessage:', message)

      if (isFrame) {
        window.parent.postMessage(message, window.origin)
      } else if (window.webkit?.messageHandlers?.callbackHandler?.postMessage) {
        window.webkit.messageHandlers.callbackHandler.postMessage(message)
      } else {
        this.#logger.warn('WebKit handler not found')
      }
    } catch (error) {
      this.#logger.error('Error posting message:', error)
    }
  }

  #postMessageToWindow(payload: SendPayloadDto, eventKey: string): Promise<SendResponseDto> {
    return new Promise((resolve, reject) => {
      const receivedResponse = (res: SendResponseDto) => {
        resolve(res)
        this.removeEventListener(eventKey, receivedResponse)
      }
      this.on(eventKey, receivedResponse)

      window.opener?.postMessage(payload, '*')
    })
  }

  #subscribe() {
    window.addEventListener('flutterInAppWebViewPlatformReady', () => {
      this.#isReady = true
      this.emit('ready')
      this.#logger.info('flutterInAppWebViewPlatformReady detected, system ready')
    })

    window.require?.('electron')?.ipcRenderer.on('message', (_event: any, ...args: any[]) => {
      this.#logger.debug('Electron ipcRenderer message received:', args)
      if (args[0]) {
        window.postMessage(args[0], '*')
      } else {
        window.postMessage(args, '*')
      }
    })

    window.addEventListener('message', (event) => {
      try {
        const { data } = event
        this.#logger.debug('Received message from native:', data)
        if (!data) return

        let receiveMessage: any
        if (data.type === 'normal') {
          receiveMessage = typeof data === 'string' ? JSON.parse(data) : data
        } else if (data.type === 'large') {
          const { chunk, index, totalChunks, command } = data
          if (!this.#receiveLargeData[command]) {
            this.#receiveLargeData[command] = {
              expectedChunks: totalChunks,
              receivedData: '',
              receivedChunks: 0
            }
          }
          this.#receiveLargeData[command].receivedData += chunk
          this.#receiveLargeData[command].receivedChunks += 1

          if (this.#receiveLargeData[command].receivedChunks !== totalChunks) return
          receiveMessage = JSON.parse(this.#receiveLargeData[command].receivedData)
          delete this.#receiveLargeData[command]
        } else {
          receiveMessage = data
        }

        if (!receiveMessage) return
        const eventKey = `${receiveMessage.data.command}_${receiveMessage.data.messageId}`
        this.#logger.debug('Emitting event:', eventKey, receiveMessage)
        this.emit(eventKey, receiveMessage)
      } catch (error) {
        this.#logger.error('Error processing incoming message:', error)
      }
    })
  }
}

const core = new SystemCore()
export { core as SystemCore }
