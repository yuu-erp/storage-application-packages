type EventHandler<T = any> = (payload: T) => void

export class EventEmitter {
  private events: Map<string, Set<EventHandler>> = new Map()

  on<T = any>(event: string, handler: EventHandler<T>): void {
    if (!this.events.has(event)) {
      this.events.set(event, new Set())
    }
    this.events.get(event)!.add(handler)
  }

  removeEventListener<T = any>(event: string, handler: EventHandler<T>): void {
    this.events.get(event)?.delete(handler)
  }

  removeAllEventListeners(event: string): void {
    this.events.delete(event)
  }

  emit<T = any>(event: string, payload: T): void {
    this.events.get(event)?.forEach((handler) => handler(payload))
  }
}
