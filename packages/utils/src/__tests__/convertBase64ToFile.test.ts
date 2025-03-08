import { convertBase64ToFile } from '../convert'

describe('convertBase64ToFile', () => {
  it('chuyển đổi chuỗi base64 thành đối tượng File', () => {
    const base64String = 'data:text/plain;base64,SGVsbG8sIFdvcmxkIQ=='
    const fileName = 'test.txt'
    const fileType = 'text/plain'

    const file = convertBase64ToFile(base64String, fileName, fileType)

    expect(file).toBeInstanceOf(File)
    expect(file.name).toBe(fileName)
    expect(file.type).toBe(fileType)
  })

  it('ném lỗi nếu chuỗi base64 không hợp lệ', () => {
    expect(() => convertBase64ToFile('invalid-base64', 'test.txt', 'text/plain')).toThrow()
  })
})
