import { splitDataIntoChunks } from './utils'
import { EventEmitter } from './utils/EventEmitter'

class SystemCore extends EventEmitter {
  private pendingCommands = new Set<string>()
  constructor() {
    super()
  }

  #sendChunks(command: string, data: string, isFrame = false) {
    try {
      if (!command || typeof command !== 'string') {
        throw new Error('Command must be a valid string')
      }
      const chunks = splitDataIntoChunks(data)
      console.log(`Sending ${chunks.length} chunks`)
      chunks.forEach(({ chunk, index, totalChunks }) => {
        const message = JSON.stringify({ type: 'large', chunk, index, totalChunks, command })

        if (isFrame) {
          window.parent.postMessage(message, '*') // Cân nhắc thay '*' bằng origin cụ thể
        } else if (
          typeof window?.webkit?.messageHandlers?.callbackHandler?.postMessage === 'function'
        ) {
          window.webkit.messageHandlers.callbackHandler.postMessage(message)
        } else {
          console.warn('WebKit message handler not found')
        }
      })
    } catch (error) {
      console.error('Error sending data:', error)
    }
  }

  #sendMessage(message: string, isFrame = false) {
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
      console.error('Error sending data:', error)
    }
  }

  #sendMessageToNative(message: { command: string; messageId?: string }, _isFrame: boolean) {
    try {
    } catch (error) {
    } finally {
      this.pendingCommands.delete(message.command.toString())
    }
  }
}

const core = new SystemCore()
export { core as SystemCore }
