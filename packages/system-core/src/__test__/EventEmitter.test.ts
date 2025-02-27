import { EventEmitter } from '../utils/EventEmitter'

describe('EventEmitter', () => {
  let eventEmitter: EventEmitter

  beforeEach(() => {
    eventEmitter = new EventEmitter()
  })

  test('should register and trigger an event', () => {
    const handler = jest.fn()
    eventEmitter.on('testEvent', handler)

    eventEmitter.emit('testEvent', 'payload')

    expect(handler).toHaveBeenCalledWith('payload')
    expect(handler).toHaveBeenCalledTimes(1)
  })

  test('should remove a specific event listener', () => {
    const handler = jest.fn()
    eventEmitter.on('testEvent', handler)

    eventEmitter.removeEventListener('testEvent', handler)
    eventEmitter.emit('testEvent', 'payload')

    expect(handler).not.toHaveBeenCalled()
  })

  test('should remove all listeners for an event', () => {
    const handler1 = jest.fn()
    const handler2 = jest.fn()

    eventEmitter.on('testEvent', handler1)
    eventEmitter.on('testEvent', handler2)

    eventEmitter.removeAllEventListeners('testEvent')
    eventEmitter.emit('testEvent', 'payload')

    expect(handler1).not.toHaveBeenCalled()
    expect(handler2).not.toHaveBeenCalled()
  })

  test('should not fail if emitting an event with no listeners', () => {
    expect(() => eventEmitter.emit('nonExistentEvent', 'payload')).not.toThrow()
  })
})
