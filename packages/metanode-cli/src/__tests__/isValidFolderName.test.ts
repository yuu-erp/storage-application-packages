import { isValidFolderName } from '../utils/validators'

describe('isValidFolderName function', () => {
  test('Tên hợp lệ', () => {
    expect(isValidFolderName('my-folder')).toBe(true)
    expect(isValidFolderName('backup_2024')).toBe(true)
    expect(isValidFolderName('Folder123')).toBe(true)
  })

  test('Tên không hợp lệ', () => {
    expect(isValidFolderName('folder name')).toBe(false)
    expect(isValidFolderName('Invalid@Name!')).toBe(false)
    expect(isValidFolderName('')).toBe(false)
    expect(isValidFolderName('a'.repeat(101))).toBe(false)
  })
})
