import { truncateString } from '../formats'

describe('truncateString - Cắt ngắn chuỗi', () => {
  test('Chuỗi ngắn hơn hoặc bằng 2 * length không bị cắt', () => {
    expect(truncateString('short', 6)).toBe('short')
    expect(truncateString('abcdefgh', 4)).toBe('abcdefgh')
    expect(truncateString('', 6)).toBe('') // Chuỗi rỗng
  })

  test('Cắt chuỗi ở giữa (center)', () => {
    expect(truncateString('abcdefghij', 3, 'center')).toBe('abc...hij')
    expect(truncateString('longerexampletext', 5, 'center')).toBe('longe...etext')
  })

  test('Cắt chuỗi từ đầu (start)', () => {
    expect(truncateString('abcdefghij', 3, 'start')).toBe('...efghij')
    expect(truncateString('longerexampletext', 5, 'start')).toBe('...xampletext')
  })

  test('Cắt chuỗi từ cuối (end)', () => {
    expect(truncateString('abcdefghij', 3, 'end')).toBe('abcdef...')
    expect(truncateString('longerexampletext', 5, 'end')).toBe('longerexam...')
  })

  test('Sử dụng ký tự thay thế tùy chỉnh', () => {
    expect(truncateString('abcdefghij', 3, 'center', '--')).toBe('abc--hij')
    expect(truncateString('abcdefghij', 3, 'start', '***')).toBe('***efghij')
    expect(truncateString('abcdefghij', 3, 'end', '###')).toBe('abcdef###')
  })

  test('Trường hợp đặc biệt', () => {
    expect(truncateString(null as any, 3)).toBe('') // `null` -> chuỗi rỗng
    expect(truncateString(undefined as any, 3)).toBe('') // `undefined` -> chuỗi rỗng
    expect(truncateString(1234567890 as any, 3)).toBe('123...890') // Chuyển số thành chuỗi và cắt
  })
})
