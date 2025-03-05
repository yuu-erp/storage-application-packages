import { hexToUtf8 } from '../handle'

describe('hexToUtf8 - Chuyển đổi chuỗi hex sang UTF-8', () => {
  test('Chuyển đổi hex hợp lệ sang UTF-8', () => {
    expect(hexToUtf8('48656c6c6f')).toBe('Hello') // "Hello"
    expect(hexToUtf8('776f726c64')).toBe('world') // "world"
    expect(hexToUtf8('4869')).toBe('Hi') // "Hi"
    expect(hexToUtf8('20612062')).toBe(' a b') // " a b"
  })

  test('Chuỗi hex rỗng trả về chuỗi rỗng', () => {
    expect(hexToUtf8('')).toBe('')
  })

  test('Chuỗi hex có số ký tự lẻ gây lỗi', () => {
    expect(() => hexToUtf8('123')).toThrow('Invalid hex string')
    expect(() => hexToUtf8('a1b')).toThrow('Invalid hex string')
  })

  test('Chuỗi hex không hợp lệ gây lỗi', () => {
    expect(() => hexToUtf8('ZZZZ')).toThrow('Invalid hex string')
    expect(() => hexToUtf8('g1h2')).toThrow('Invalid hex string')
  })
})
