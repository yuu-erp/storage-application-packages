import { isValidName } from '../validators'

describe('isValidName - Kiểm tra tên hợp lệ', () => {
  test('Tên hợp lệ - Chỉ chữ cái', () => {
    expect(isValidName('Nguyễn Văn A')).toBe(true)
    expect(isValidName('Lê Thị B')).toBe(true)
    expect(isValidName('John Doe')).toBe(true)
  })
  test('Tên quá ngắn', () => {
    expect(isValidName('A')).toBe(false)
  })

  test('Tên quá dài', () => {
    expect(
      isValidName('A'.repeat(51)) // 51 ký tự
    ).toBe(false)
  })

  test('Tên chứa số', () => {
    expect(isValidName('John123')).toBe(false)
    expect(isValidName('Nguyễn Văn 2')).toBe(false)
  })

  test('Tên chứa ký tự đặc biệt', () => {
    expect(isValidName('John@Doe')).toBe(false)
    expect(isValidName('Lê!Thị@B')).toBe(false)
  })

  test('Tên chứa khoảng trắng đầu/cuối', () => {
    expect(isValidName('  Nguyễn Văn A  ')).toBe(true)
    expect(isValidName(' Lê Thị B ')).toBe(true)
  })

  test('Tên rỗng hoặc chỉ có khoảng trắng', () => {
    expect(isValidName('')).toBe(false)
    expect(isValidName('    ')).toBe(false)
  })
})
