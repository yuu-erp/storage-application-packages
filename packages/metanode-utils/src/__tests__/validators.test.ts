import { isByte32, isEmpty, isHex, isPrivateKey, isValidAddress, isValidName } from '../validators'

describe('Validator Functions', () => {
  describe('isValidAddress - Xác thực địa chỉ', () => {
    test('Hợp lệ', () => {
      expect(isValidAddress('0x67f7436714097b96f27e8eae442a889e1de0d131')).toBe(true)
      expect(isValidAddress('0x52908400098527886E0F7030069857D2E4169EE7')).toBe(true)
      expect(isValidAddress('0xde709f2102306220921060314715629080e2fb77')).toBe(true)
    })

    test('Không hợp lệ', () => {
      expect(isValidAddress('0xINVALIDADDRESS1234567890')).toBe(false) // Ký tự ngoài phạm vi a-f, A-F, 0-9
      expect(isValidAddress('0x742d35Cc6634C0532925a3b844Bc454e4438f44')).toBe(false) // Chỉ có 39 ký tự
      expect(isValidAddress('742d35Cc6634C0532925a3b844Bc454e4438f44e')).toBe(false)
      expect(isValidAddress('')).toBe(false)
      expect(isValidAddress('0x123')).toBe(false)
    })
  })

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

  describe('isEmpty - Kiểm tra giá trị rỗng', () => {
    test('Các giá trị rỗng', () => {
      expect(isEmpty('')).toBe(true)
      expect(isEmpty([])).toBe(true)
      expect(isEmpty({})).toBe(true)
      expect(isEmpty(0)).toBe(true)
      expect(isEmpty(false)).toBe(true)
    })

    test('Các giá trị không rỗng', () => {
      expect(isEmpty('Hello')).toBe(false)
      expect(isEmpty([1, 2, 3])).toBe(false)
      expect(isEmpty({ key: 'value' })).toBe(false)
      expect(isEmpty(42)).toBe(false)
      expect(isEmpty(true)).toBe(false)
    })
  })

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

  describe('isByte32 - Kiểm tra chuỗi có phải là giá trị byte32 hợp lệ hay không', () => {
    test('Chuỗi hợp lệ (64 ký tự hex)', () => {
      expect(isByte32('a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2')).toBe(
        true
      )
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

  describe('isHex - Kiểm tra chuỗi có phải là hex hợp lệ hay không', () => {
    test('Chuỗi hex hợp lệ với độ dài chẵn', () => {
      expect(isHex('a1b2c3')).toBe(true)
      expect(isHex('ABCDEF123456')).toBe(true)
      expect(isHex('00ff00')).toBe(true)
      expect(isHex('deadbeef')).toBe(true)
    })

    test('Chuỗi có độ dài lẻ', () => {
      expect(isHex('a1b2c')).toBe(false)
      expect(isHex('12345')).toBe(false)
    })

    test('Chuỗi chứa ký tự không hợp lệ', () => {
      expect(isHex('xyz123')).toBe(false) // Chứa ký tự không phải hex
      expect(isHex('GHIJKL')).toBe(false) // Chứa chữ cái ngoài phạm vi a-f/A-F
      expect(isHex('123@!')).toBe(false) // Chứa ký tự đặc biệt
    })

    test('Chuỗi rỗng', () => {
      expect(isHex('')).toBe(false)
    })

    test('Giá trị không phải chuỗi', () => {
      expect(isHex(123456 as any)).toBe(false)
      expect(isHex(null as any)).toBe(false)
      expect(isHex(undefined as any)).toBe(false)
      expect(isHex({} as any)).toBe(false)
      expect(isHex([] as any)).toBe(false)
    })
  })
})
