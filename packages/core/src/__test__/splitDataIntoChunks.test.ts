import { splitDataIntoChunks } from '../utils'

describe('splitDataIntoChunks - Chia nhỏ dữ liệu thành các phần có kích thước tối đa', () => {
  test('Chia dữ liệu khi kích thước nhỏ hơn chunkSize - chỉ có một chunk duy nhất', () => {
    const data = 'Hello, world!'
    const chunks = splitDataIntoChunks(data, 64000)

    expect(chunks).toHaveLength(1)
    expect(chunks[0]).toEqual({ chunk: data, index: 0, totalChunks: 1 })
  })

  test('Chia dữ liệu khi kích thước lớn hơn chunkSize - tạo nhiều chunks', () => {
    const chunkSize = 10
    const data = 'abcdefghijABCDEFGHIJ'
    const chunks = splitDataIntoChunks(data, chunkSize)

    expect(chunks).toHaveLength(2)
    expect(chunks[0]).toEqual({ chunk: 'abcdefghij', index: 0, totalChunks: 2 })
    expect(chunks[1]).toEqual({ chunk: 'ABCDEFGHIJ', index: 1, totalChunks: 2 })
  })

  test('Chia dữ liệu khi kích thước đúng bằng chunkSize - chỉ có một chunk', () => {
    const data = 'abcdefghij'
    const chunks = splitDataIntoChunks(data, 10)

    expect(chunks).toHaveLength(1)
    expect(chunks[0]).toEqual({ chunk: data, index: 0, totalChunks: 1 })
  })

  test('Ném lỗi khi dữ liệu đầu vào rỗng', () => {
    expect(() => splitDataIntoChunks('', 10)).toThrow('Data cannot be empty')
  })

  test('Chia dữ liệu có kích thước lớn thành nhiều chunks với kích thước cụ thể', () => {
    const chunkSize = 5
    const data = 'abcdefghijklmnopqrstuvwxyz'
    const chunks = splitDataIntoChunks(data, chunkSize)

    expect(chunks).toHaveLength(6)
    expect(chunks[0]).toEqual({ chunk: 'abcde', index: 0, totalChunks: 6 })
    expect(chunks[5]).toEqual({ chunk: 'z', index: 5, totalChunks: 6 })
  })
})
