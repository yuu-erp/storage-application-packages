import { isEmpty, isPrivateKey, isValidAddress, isValidName } from '../validators'

describe('Validator Functions', () => {
  test('Xác thực địa chỉ', () => {
    expect(isValidAddress('0x67f7436714097b96f27e8eae442a889e1de0d131')).toBe(true)
    expect(isValidAddress('0x52908400098527886E0F7030069857D2E4169EE7')).toBe(true)
    expect(isValidAddress('0xde709f2102306220921060314715629080e2fb77')).toBe(true)
    // Chứa ký tự ngoài phạm vi a-f, A-F, 0-9
    expect(isValidAddress('0xINVALIDADDRESS1234567890')).toBe(false)
    // Chỉ có 39 ký tự (thiếu 1)
    expect(isValidAddress('0x742d35Cc6634C0532925a3b844Bc454e4438f44')).toBe(false)
    expect(isValidAddress('742d35Cc6634C0532925a3b844Bc454e4438f44e')).toBe(false)
    expect(isValidAddress('')).toBe(false)
    expect(isValidAddress('0x123')).toBe(false)
  })

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

  test('Tên hợp lệ', () => {
    expect(isValidName('John')).toBe(true)
    expect(isValidName('John Doe')).toBe(true)
    expect(isValidName('John123')).toBe(true)
    expect(isValidName('Jane Doe 123')).toBe(true)
  })

  test('Tên không hợp lệ', () => {
    expect(() => isValidName('')).toThrow('Tên không được để trống!') // Chuỗi rỗng
    expect(() => isValidName('  ')).toThrow('Tên không được để trống!') // Chỉ có khoảng trắng
    expect(() => isValidName('John@Doe')).toThrow('Tên chỉ được chứa chữ cái và số') // Có ký tự đặc biệt
    expect(() => isValidName('John_Doe')).toThrow('Tên chỉ được chứa chữ cái và số') // Dấu gạch dưới
    expect(() => isValidName('123!')).toThrow('Tên chỉ được chứa chữ cái và số') // Dấu chấm than
  })

  test('Kiểm tra các giá trị không rỗng', () => {
    expect(isEmpty('Hello')).toBe(false) // Chuỗi không rỗng
    expect(isEmpty([1, 2, 3])).toBe(false) // Mảng có phần tử
    expect(isEmpty({ key: 'value' })).toBe(false) // Đối tượng có thuộc tính
    expect(isEmpty(42)).toBe(false) // Số không phải rỗng
    expect(isEmpty(false)).toBe(false) // Boolean false không phải rỗng
    expect(isEmpty(true)).toBe(false) // Boolean true không phải rỗng
  })
})
