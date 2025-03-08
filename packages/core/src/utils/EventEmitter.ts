export class EventEmitter {
  private events: Record<string, Function[]> = {}

  on(event: string, listener: Function): void {
    if (!this.events[event]) {
      this.events[event] = []
    }
    this.events[event].push(listener)
  }

  emit(event: string, ...args: any[]): void {
    if (this.events[event]) {
      this.events[event].forEach((listener) => listener(...args))
    }
  }

  async emitAsync(event: string, ...args: any[]): Promise<void> {
    if (this.events[event]) {
      await Promise.all(this.events[event].map((listener) => listener(...args)))
    }
  }

  removeEventListener(event: string, listener: Function): void {
    if (!this.events[event]) return
    this.events[event] = this.events[event].filter((l) => l !== listener)
    if (this.events[event].length === 0) {
      delete this.events[event]
    }
  }

  removeAllEventListeners(event?: string): void {
    if (event) {
      delete this.events[event]
    } else {
      this.events = {}
    }
  }
}
