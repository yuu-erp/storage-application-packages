import path from 'path'
import { handlePath } from '../utils/index'

describe('handlePath function', () => {
  test('should return correct absolute path with default basePath', () => {
    const result = handlePath('utils/helpers.ts')
    expect(result).toBe(path.resolve('src/utils/helpers.ts'))
  })

  test('should return correct absolute path with custom basePath', () => {
    const customBase = path.resolve('customDir')
    const result = handlePath('config/settings.ts', customBase)
    expect(result).toBe(path.resolve(customBase, 'config/settings.ts'))
  })

  test('should handle empty filePath correctly', () => {
    const result = handlePath('')
    expect(result).toBe(path.resolve('src'))
  })

  test('should handle absolute filePath correctly', () => {
    const absolutePath = '/absolute/path/to/file.ts'
    const result = handlePath(absolutePath)
    expect(result).toBe(absolutePath)
  })
})
