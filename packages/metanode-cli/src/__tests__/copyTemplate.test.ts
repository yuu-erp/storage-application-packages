import fs from 'fs'
import path from 'path'
import fsExtra from 'fs-extra'
import { copyTemplate, handlePath } from '../utils'

describe('copyTemplate function', () => {
  const testTemplateDir = handlePath('templates/test-template', path.resolve(__dirname, '../'))
  const testDestinationDir = handlePath('test-destination', path.resolve(__dirname, '../'))

  beforeAll(() => {
    // Tạo thư mục giả lập template
    fsExtra.ensureDirSync(testTemplateDir)
    fs.writeFileSync(path.join(testTemplateDir, 'index.html'), '<html></html>')
  })

  afterEach(() => {
    // Xóa thư mục đích sau mỗi test
    fsExtra.removeSync(testDestinationDir)
  })

  afterAll(() => {
    // Xóa thư mục template sau khi hoàn thành test
    fsExtra.removeSync(testTemplateDir)
  })

  test('Sao chép template thành công', () => {
    copyTemplate('test-template', 'test-destination')

    // Kiểm tra thư mục đích có tồn tại không
    expect(fs.existsSync(testDestinationDir)).toBe(true)

    // Kiểm tra file trong thư mục đã sao chép đúng chưa
    const copiedFile = path.join(testDestinationDir, 'index.html')
    expect(fs.existsSync(copiedFile)).toBe(true)

    // Kiểm tra nội dung file có giống bản gốc không
    expect(fs.readFileSync(copiedFile, 'utf8')).toBe('<html></html>')
  })

  test('Ném lỗi khi thư mục template không tồn tại', () => {
    expect(() => copyTemplate('non-existent-template', 'test-destination')).toThrow(
      'Source path does not exist'
    )
  })
})
