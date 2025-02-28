import { isValidFolderName } from '../utils/validators'

describe('Validator Functions', () => {
  describe('isValidFolderName - Kiểm tra tên thư mục hợp lệ', () => {
    test('Tên hợp lệ', () => {
      expect(isValidFolderName('my-folder')).toBe(true)
      expect(isValidFolderName('backup_2024')).toBe(true)
      expect(isValidFolderName('Folder123')).toBe(true)
    })

    test('Tên không hợp lệ', () => {
      expect(isValidFolderName('folder name')).toBe(false) // Khoảng trắng
      expect(isValidFolderName('Invalid@Name!')).toBe(false) // Ký tự đặc biệt
      expect(isValidFolderName('')).toBe(false) // Rỗng
      expect(isValidFolderName('a'.repeat(101))).toBe(false) // Quá dài (>100 ký tự)
    })
  })
})
