import { parseData } from '../handle'

describe('Hàm parseData - Chuyển đổi JSON thành đối tượng/mảng', () => {
  test('Chuyển đổi chuỗi JSON thành đối tượng', () => {
    const jsonString = '{"name":"Alice","age":25}'
    expect(parseData(jsonString)).toEqual({ name: 'Alice', age: 25 })
  })

  test('Chuyển đổi chuỗi JSON thành mảng', () => {
    const jsonArray = '[1, 2, 3, "hello"]'
    expect(parseData(jsonArray)).toEqual([1, 2, 3, 'hello'])
  })

  test('Chuyển đổi object thành object', () => {
    const obj = { name: 'Bob', isActive: true }
    expect(parseData(obj)).toEqual(obj)
  })

  test('Chuyển đổi mảng thành mảng', () => {
    const arr = [1, 2, 3]
    expect(parseData(arr)).toEqual(arr)
  })

  test('Thay thế "true" và "false" dạng chuỗi thành giá trị boolean', () => {
    const jsonWithBooleans = '{"status":"true","enabled":"false"}'
    expect(parseData(jsonWithBooleans)).toEqual({
      status: true,
      enabled: false
    })
  })

  test('Giữ nguyên giá trị nếu đầu vào là null hoặc undefined', () => {
    expect(parseData(null)).toBeNull()
    expect(parseData(undefined)).toBeUndefined()
  })

  test('Xử lý trường hợp không phải JSON (trả về dạng object)', () => {
    const normalText = 'Hello, world!'
    expect(parseData(normalText)).toEqual('Hello, world!')
  })
})
