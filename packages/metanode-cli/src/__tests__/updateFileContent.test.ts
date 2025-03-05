import fs from 'fs'
import path from 'path'
import { Variable } from '../utils/replaceTemplate'
import { handlePath, updateFileContent } from '../utils/index'

describe('updateFileContent', () => {
  const testFilePath = handlePath('test-file.txt', path.resolve(__dirname, '../'))

  beforeEach(() => {
    // Tạo file giả lập để test
    fs.writeFileSync(testFilePath, 'Hello, {name}! Welcome to {place}.', 'utf8')
  })

  afterEach(() => {
    // Xóa file test sau mỗi lần chạy test
    if (fs.existsSync(testFilePath)) {
      fs.unlinkSync(testFilePath)
    }
  })

  test('Cập nhật nội dung file thành công', () => {
    const variables: Variable[] = [
      { replacer: '{name}', value: 'Alice' },
      { replacer: '{place}', value: 'Earth' }
    ]

    updateFileContent(testFilePath, variables)

    const updatedContent = fs.readFileSync(testFilePath, 'utf8')
    expect(updatedContent).toBe('Hello, Alice! Welcome to Earth.')
  })

  test('Không thay đổi file nếu không có biến thay thế', () => {
    const originalContent = fs.readFileSync(testFilePath, 'utf8')

    updateFileContent(testFilePath, [])

    const updatedContent = fs.readFileSync(testFilePath, 'utf8')
    expect(updatedContent).toBe(originalContent)
  })

  test('Ném lỗi nếu file không tồn tại', () => {
    const nonExistentFile = handlePath('non-existent.txt')

    expect(() =>
      updateFileContent(nonExistentFile, [{ replacer: '{name}', value: 'Bob' }])
    ).toThrow(`File không tồn tại: ${nonExistentFile}`)
  })
})
