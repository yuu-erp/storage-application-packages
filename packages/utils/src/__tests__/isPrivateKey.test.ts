import { isPrivateKey } from '../validators'

describe('isPrivateKey - Kiểm tra private key hợp lệ', () => {
  test('Private key hợp lệ', () => {
    expect(isPrivateKey('0x' + 'a'.repeat(64))).toBe(true) // Có tiền tố "0x"
    expect(isPrivateKey('a'.repeat(64))).toBe(true) // Không có tiền tố "0x"
    expect(isPrivateKey('0x' + '1234567890abcdef'.repeat(4))).toBe(true) // Chuỗi hợp lệ với số hex
  })

  test('Private key không hợp lệ', () => {
    expect(isPrivateKey('')).toBe(false) // Chuỗi rỗng
    expect(isPrivateKey(undefined)).toBe(false) // Không có giá trị
    expect(isPrivateKey(null as any)).toBe(false) // Giá trị null
    expect(isPrivateKey('0x' + 'a'.repeat(63))).toBe(false) // Dưới 64 ký tự
    expect(isPrivateKey('a'.repeat(65))).toBe(false) // Trên 64 ký tự
    expect(isPrivateKey('0x' + 'xyz123'.repeat(10))).toBe(false) // Chứa ký tự không hợp lệ
    expect(isPrivateKey('ghijklmnopqrstuv'.repeat(4))).toBe(false) // Ký tự không phải hex
  })
})
