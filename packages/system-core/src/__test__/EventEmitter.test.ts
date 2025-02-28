import { EventEmitter } from '../utils/EventEmitter'

describe('EventEmitter', () => {
  let eventEmitter: EventEmitter

  beforeEach(() => {
    eventEmitter = new EventEmitter()
  })

  test('nên đăng ký và kích hoạt sự kiện', () => {
    const handler = jest.fn()
    eventEmitter.on('suKienTest', handler)

    eventEmitter.emit('suKienTest', 'dữ liệu')

    expect(handler).toHaveBeenCalledWith('dữ liệu')
    expect(handler).toHaveBeenCalledTimes(1)
  })

  test('nên xóa một listener cụ thể của sự kiện', () => {
    const handler = jest.fn()
    eventEmitter.on('suKienTest', handler)

    eventEmitter.removeEventListener('suKienTest', handler)
    eventEmitter.emit('suKienTest', 'dữ liệu')

    expect(handler).not.toHaveBeenCalled()
  })

  test('nên xóa tất cả listener của một sự kiện', () => {
    const handler1 = jest.fn()
    const handler2 = jest.fn()

    eventEmitter.on('suKienTest', handler1)
    eventEmitter.on('suKienTest', handler2)

    eventEmitter.removeAllEventListeners('suKienTest')
    eventEmitter.emit('suKienTest', 'dữ liệu')

    expect(handler1).not.toHaveBeenCalled()
    expect(handler2).not.toHaveBeenCalled()
  })

  test('không nên lỗi khi kích hoạt sự kiện không có listener', () => {
    expect(() => eventEmitter.emit('suKienKhongTonTai', 'dữ liệu')).not.toThrow()
  })
})
