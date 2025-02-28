import { splitDataIntoChunks } from './utils'
import { EventEmitter } from './utils/EventEmitter'

class SystemCore extends EventEmitter {
  private pendingCommands = new Set<string>()
  constructor() {
    super()
  }

  public send() {}

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
        window.parent.postMessage(message, '*') // Cân nhắc thay '*' bằng origin cụ thể
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

  #sendMessageToNative(message: { command: string; messageId?: string }, isFrame: boolean) {
    try {
      const formattedMessage = JSON.stringify(message)
      this.#postMessage(formattedMessage, isFrame)
    } catch (error) {
      console.error('Error sending message:', error)
    } finally {
      this.pendingCommands.delete(message.command.toString())
    }
  }
}

const core = new SystemCore()
export { core as SystemCore }
