import fs from 'fs'
import path from 'path'
import { createDirectory, handlePath } from '../utils'

describe('createDirectory function', () => {
  const testDir = handlePath('test-directory', path.resolve(__dirname, '../'))

  afterEach(() => {
    // Xóa thư mục sau mỗi test để đảm bảo môi trường sạch
    if (fs.existsSync(testDir)) {
      fs.rmdirSync(testDir, { recursive: true })
    }
  })

  test('Tạo thư mục mới nếu chưa tồn tại', () => {
    expect(fs.existsSync(testDir)).toBe(false) // Thư mục chưa tồn tại

    createDirectory('test-directory')

    expect(fs.existsSync(testDir)).toBe(true) // Thư mục đã được tạo
  })

  test('Không tạo lại thư mục nếu đã tồn tại', () => {
    fs.mkdirSync(testDir, { recursive: true }) // Tạo trước thư mục
    const mkdirSpy = jest.spyOn(fs, 'mkdirSync')

    createDirectory('test-directory')

    expect(mkdirSpy).not.toHaveBeenCalled() // Kiểm tra mkdirSync không được gọi lại
    mkdirSpy.mockRestore()
  })
})
