import { PackageManager } from '../type'
import { getPackageManager } from '../utils'

describe('getPackageManager', () => {
  let originalNpmExecPath: string | undefined

  beforeEach(() => {
    // Lưu trạng thái gốc của npm_execpath trước khi thay đổi
    originalNpmExecPath = process.env.npm_execpath
  })

  afterEach(() => {
    // Khôi phục trạng thái ban đầu sau mỗi test case
    if (originalNpmExecPath !== undefined) {
      process.env.npm_execpath = originalNpmExecPath
    } else {
      delete process.env.npm_execpath
    }
  })

  test('Trả về YARN nếu npm_execpath chứa "yarn"', () => {
    process.env.npm_execpath = '/usr/local/bin/yarn'
    expect(getPackageManager()).toBe(PackageManager.YARN)
  })

  test('Trả về PNPM nếu npm_execpath chứa "pnpm"', () => {
    process.env.npm_execpath = '/usr/local/bin/pnpm'
    expect(getPackageManager()).toBe(PackageManager.PNPM)
  })

  test('Trả về NPM nếu npm_execpath không chứa "yarn" hoặc "pnpm"', () => {
    process.env.npm_execpath = '/usr/local/bin/npm'
    expect(getPackageManager()).toBe(PackageManager.NPM)
  })

  test('Trả về NPM nếu npm_execpath không được định nghĩa', () => {
    delete process.env.npm_execpath
    expect(getPackageManager()).toBe(PackageManager.NPM)
  })
})
