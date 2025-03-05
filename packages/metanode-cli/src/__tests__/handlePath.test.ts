import path from 'path'
import { handlePath } from '../utils/index'

describe('handlePath function', () => {
  test('Trả về đường dẫn tuyệt đối đúng với basePath mặc định', () => {
    const result = handlePath('utils/helpers.ts')
    expect(result).toBe(path.resolve('src/utils/helpers.ts'))
  })

  test('Trả về đường dẫn tuyệt đối đúng với basePath tùy chỉnh', () => {
    const customBase = path.resolve('customDir')
    const result = handlePath('config/settings.ts', customBase)
    expect(result).toBe(path.resolve(customBase, 'config/settings.ts'))
  })

  test('Xử lý khi filePath rỗng', () => {
    const result = handlePath('')
    expect(result).toBe(path.resolve('src'))
  })

  test('Xử lý khi filePath là đường dẫn tuyệt đối', () => {
    const absolutePath = '/absolute/path/to/file.ts'
    const result = handlePath(absolutePath)
    expect(result).toBe(absolutePath)
  })
})
