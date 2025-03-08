import { isByte32 } from '../validators'

describe('isByte32 - Kiểm tra chuỗi có phải là giá trị byte32 hợp lệ hay không', () => {
  test('Chuỗi hợp lệ (64 ký tự hex)', () => {
    expect(isByte32('a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2')).toBe(true)
  })

  test('Chuỗi có độ dài khác 64', () => {
    expect(isByte32('a1b2c3d4')).toBe(false) // Quá ngắn
    expect(isByte32('a1b2c3'.repeat(11))).toBe(false) // Quá dài
  })

  test('Chuỗi chứa ký tự không hợp lệ (không phải hex)', () => {
    expect(isByte32('a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6a7b8c9d0e1')).toBe(false)
  })

  test('Chuỗi trống', () => {
    expect(isByte32('')).toBe(false)
  })

  test('Giá trị không phải là chuỗi', () => {
    expect(isByte32(123456 as any)).toBe(false)
    expect(isByte32(null as any)).toBe(false)
    expect(isByte32(undefined as any)).toBe(false)
    expect(isByte32({} as any)).toBe(false)
    expect(isByte32([] as any)).toBe(false)
  })
})
