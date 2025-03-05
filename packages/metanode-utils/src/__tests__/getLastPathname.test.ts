import { getLastPathname } from '../handle'

describe('Hàm getLastPathname', () => {
  const originalHref = window.location.href

  beforeEach(() => {
    Object.defineProperty(window, 'location', {
      writable: true,
      value: { href: 'https://example.com/test/path?query=123' }
    })
  })

  afterEach(() => {
    Object.defineProperty(window, 'location', {
      writable: true,
      value: { href: originalHref }
    })
  })

  test('Trả về đúng phần cuối của URL khi không có query string', () => {
    window.location.href = 'https://example.com/path/to/page'
    expect(getLastPathname()).toBe('https://example.com/path/to/page')
  })

  test('Trả về đúng phần cuối của URL khi có query string', () => {
    window.location.href = 'https://example.com/path/to/page?query=value'
    expect(getLastPathname()).toBe('query=value')
  })

  test('Xử lý URL có nhiều query string', () => {
    window.location.href = 'https://example.com/path/to/page?param1=val1&param2=val2'
    expect(getLastPathname()).toBe('param1=val1&param2=val2')
  })

  test('Xử lý URL có fragment (#hash)', () => {
    window.location.href = 'https://example.com/path/to/page#section'
    expect(getLastPathname()).toBe('https://example.com/path/to/page#section')
  })

  test('Xử lý URL có cả query string và fragment', () => {
    window.location.href = 'https://example.com/path/to/page?query=value#section'
    expect(getLastPathname()).toBe('query=value#section')
  })

  test('Xử lý URL chỉ có query string nhưng không có pathname', () => {
    window.location.href = 'https://example.com/?query=value'
    expect(getLastPathname()).toBe('query=value')
  })

  test('Xử lý URL chỉ có fragment (#hash)', () => {
    window.location.href = 'https://example.com/#section'
    expect(getLastPathname()).toBe('https://example.com/#section')
  })
})
