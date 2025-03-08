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

  constructor() {
    super()
    this.#isFrame = window !== window.parent
    this.#isReady =
      this.#isFrame || !!window.webkit?.messageHandlers?.callbackHandler || !!window.opener
    this.#finSdk = window.finSdk
  }

  get isReady() {
    return this.#isReady
  }

  get statusNotch() {
    return this.#hasNotch
  }

  public async send(payload: SendPayloadDto) {
    if (typeof this.#finSdk !== 'undefined' || this.#finSdk) {
      return await this.#finSdk.call(payload)
    }
    if (!window?.webkit?.messageHandlers && !this.#isFrame)
      throw new Error('Your device is not deployed yet.')
    receiveData[payload.command] = -1
    payload.appId = window.appId
    payload.messageId = generateRandomString(8)
    this.#sendMessageToNative(payload)
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
    return new Promise((resolve, reject) => {
      try {
        const receivedResponse = (res: SendResponseDto) => {
          resolve(res)
          this.removeEventListener(payload.command, receivedResponse)
        }
        this.on(payload.command, receivedResponse)
        window.opener?.postMessage(payload, '*')
      } catch (error) {
        reject(error)
      }
    })
  }
}

const core = new SystemCore()
export { core as SystemCore }
