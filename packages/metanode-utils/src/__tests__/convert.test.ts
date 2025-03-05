import { convertBase64ToFile, convertFileToBase64 } from '../convert'

describe('Convert Functions', () => {
  describe('convertFileToBase64', () => {
    beforeAll(() => {
      global.window = global as any
      global.FileReader = class {
        result: string | ArrayBuffer | null = 'data:text/plain;base64,SGVsbG8gV29ybGQ='
        onload: ((event: ProgressEvent) => void) | null = null
        onerror: ((event: ProgressEvent) => void) | null = null

        readAsDataURL() {
          setTimeout(() => {
            if (this.onload) {
              this.onload(new ProgressEvent('load'))
            }
          }, 100)
        }
      } as any
    })

    it('chuyển đổi file thành chuỗi base64', async () => {
      const file = new File(['Hello World'], 'test.txt', { type: 'text/plain' })
      const base64String = await convertFileToBase64(file)

      expect(base64String).toContain('data:text/plain;base64,')
    })

    it('từ chối nếu trình duyệt không hỗ trợ FileReader', async () => {
      const originalFileReader = global.FileReader
      global.FileReader = undefined as any // Giả lập trình duyệt không hỗ trợ FileReader

      const file = new File(['dummy content'], 'dummy.txt', { type: 'text/plain' })

      await expect(convertFileToBase64(file)).rejects.toThrow(
        'FileReader is not supported by this browser.'
      )

      global.FileReader = originalFileReader // Khôi phục FileReader
    })

    it('từ chối nếu FileReader xảy ra lỗi', async () => {
      const file = new File(['dummy content'], 'dummy.txt', { type: 'text/plain' })

      jest.spyOn(FileReader.prototype, 'readAsDataURL').mockImplementation(function (
        this: FileReader
      ) {
        setTimeout(() => {
          if (this.onerror) {
            this.onerror(new ProgressEvent('error') as unknown as ProgressEvent<FileReader>)
          }
        }, 100)
      })

      await expect(convertFileToBase64(file)).rejects.toThrow('Error reading file')
    })
  })

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
})
