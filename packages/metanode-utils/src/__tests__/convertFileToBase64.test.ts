import { convertFileToBase64 } from '../convert' // Đổi tên file import cho đúng
import { jest } from '@jest/globals'

describe('convertFileToBase64', () => {
  const mockFile = new File(['test content'], 'test.txt', { type: 'text/plain' })

  beforeEach(() => {
    jest.restoreAllMocks() // Đảm bảo reset mock trước mỗi test case
  })

  test('Chuyển đổi một File hợp lệ sang base64', async () => {
    const base64String = await convertFileToBase64(mockFile)
    expect(base64String).toMatch(/^data:text\/plain;base64,/)
  })

  test('Báo lỗi nếu FileReader không được hỗ trợ', async () => {
    jest.spyOn(window, 'FileReader').mockImplementation(() => {
      throw new Error('FileReader is not supported')
    })

    await expect(convertFileToBase64(mockFile)).rejects.toThrow('FileReader is not supported')
  })

  // test('Báo lỗi nếu đầu vào không phải là đối tượng File', async () => {
  //   await expect(convertFileToBase64('invalid' as any)).rejects.toThrow(
  //     'The provided input is not a valid File object.'
  //   )
  // })

  test('should throw an error when input is not a File object', () => {
    expect(() => convertFileToBase64('invali' as any)).toThrow(/File object/)
  })

  test('Từ chối nếu FileReader gặp lỗi', async () => {
    const mockReader = {
      readAsDataURL: jest.fn(),
      onload: jest.fn(),
      onerror: jest.fn()
    }

    jest.spyOn(window, 'FileReader').mockImplementation(() => mockReader as any)

    const promise = convertFileToBase64(mockFile)
    mockReader.onerror(new Event('error')) // Giả lập lỗi

    await expect(promise).rejects.toThrow('Error reading file')
  })

  test('Từ chối nếu readAsDataURL ném ra một ngoại lệ', async () => {
    jest.spyOn(FileReader.prototype, 'readAsDataURL').mockImplementation(() => {
      throw new Error('readAsDataURL failed')
    })

    await expect(convertFileToBase64(mockFile)).rejects.toThrow(
      'Failed to read the file: readAsDataURL failed'
    )
  })
})
