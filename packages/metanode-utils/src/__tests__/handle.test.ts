import {
  convertExponentialToDecimal,
  debounce,
  handleMessageError,
  hexToString,
  hexToUtf8,
  mulTenPow,
  parseData,
  stringToBytes32
} from '../handle'

jest.useFakeTimers()

describe('Handle Functions', () => {
  describe('Hàm handleMessageError - Xử lý thông điệp lỗi', () => {
    test('Trả về lỗi nếu là chuỗi', () => {
      expect(handleMessageError('Lỗi kết nối')).toBe('Lỗi kết nối')
      expect(handleMessageError('Không tìm thấy dữ liệu')).toBe('Không tìm thấy dữ liệu')
    })

    test('Lấy lỗi từ error.data.description', () => {
      expect(handleMessageError({ data: { description: 'Lỗi xác thực' } })).toBe('Lỗi xác thực')
      expect(handleMessageError({ data: { description: 'Token không hợp lệ' } })).toBe(
        'Token không hợp lệ'
      )
    })

    test('Lấy lỗi từ error.response.data.message', () => {
      expect(handleMessageError({ response: { data: { message: 'Lỗi hệ thống' } } })).toBe(
        'Lỗi hệ thống'
      )
      expect(handleMessageError({ response: { data: { message: 'Tài khoản bị khóa' } } })).toBe(
        'Tài khoản bị khóa'
      )
    })

    test('Lấy lỗi từ error.message', () => {
      expect(handleMessageError({ message: 'Lỗi không xác định' })).toBe('Lỗi không xác định')
      expect(handleMessageError({ message: 'Yêu cầu không hợp lệ' })).toBe('Yêu cầu không hợp lệ')
    })

    test('Trả về chuỗi JSON nếu không có thông điệp lỗi', () => {
      const errorObj = { code: 500, reason: 'Server Error' }
      expect(handleMessageError(errorObj)).toBe(JSON.stringify(errorObj))

      const emptyError = {}
      expect(handleMessageError(emptyError)).toBe(JSON.stringify(emptyError))
    })

    test('Xử lý trường hợp đặc biệt', () => {
      expect(handleMessageError(null)).toBe('null')
      expect(handleMessageError(undefined)).toBe(undefined)
      expect(handleMessageError(404)).toBe('404') // Số được chuyển thành chuỗi
    })
  })

  describe('Hàm debounce - Trì hoãn thực thi hàm', () => {
    test('Hàm được gọi sau khoảng thời gian chờ', () => {
      const mockFn = jest.fn()
      const debouncedFn = debounce(mockFn, 500)

      debouncedFn()
      expect(mockFn).not.toHaveBeenCalled()

      jest.advanceTimersByTime(500)
      expect(mockFn).toHaveBeenCalledTimes(1)
    })

    test('Hủy gọi nếu tiếp tục gọi trong khoảng thời gian chờ', () => {
      const mockFn = jest.fn()
      const debouncedFn = debounce(mockFn, 500)

      debouncedFn()
      jest.advanceTimersByTime(300) // Gọi lại trước khi hết 500ms
      debouncedFn()

      jest.advanceTimersByTime(300)
      expect(mockFn).not.toHaveBeenCalled() // Chưa đủ 500ms nên chưa gọi

      jest.advanceTimersByTime(200) // Tổng đủ 500ms từ lần gọi cuối
      expect(mockFn).toHaveBeenCalledTimes(1)
    })

    test('Truyền đúng tham số cho hàm được debounce', () => {
      const mockFn = jest.fn()
      const debouncedFn = debounce(mockFn, 300)

      debouncedFn('Hello', 123)
      jest.advanceTimersByTime(300)

      expect(mockFn).toHaveBeenCalledWith('Hello', 123)
    })

    test('Hàm debounce không bị gọi lại nếu không có lần gọi mới', () => {
      const mockFn = jest.fn()
      const debouncedFn = debounce(mockFn, 400)

      debouncedFn()
      jest.advanceTimersByTime(400)
      expect(mockFn).toHaveBeenCalledTimes(1)

      jest.advanceTimersByTime(400)
      expect(mockFn).toHaveBeenCalledTimes(1) // Không có lần gọi mới nên không tăng số lần gọi
    })
  })

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
      expect(parseData(jsonWithBooleans)).toEqual({ status: true, enabled: false })
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

  describe('hexToString - Chuyển đổi chuỗi hex thành chuỗi ký tự', () => {
    test('Chuyển đổi chuỗi hex hợp lệ thành chuỗi ký tự', () => {
      expect(hexToString('48656c6c6f')).toBe('Hello') // "Hello"
      expect(hexToString('576f726c64')).toBe('World') // "World"
      expect(hexToString('5465737420313233')).toBe('Test 123') // "Test 123"
    })

    test('Loại bỏ tiền tố "0x" nếu có', () => {
      expect(hexToString('0x48656c6c6f')).toBe('Hello')
    })

    test('Bỏ qua các ký tự không in được', () => {
      expect(hexToString('48656c6c6f00')).toBe('Hello') // Ký tự NULL (00) bị bỏ qua
      expect(hexToString('48656c6c6f1f')).toBe('Hello') // Ký tự điều khiển (1F) bị bỏ qua
    })

    test('Ném lỗi nếu chuỗi có độ dài lẻ', () => {
      expect(() => hexToString('123')).toThrow('Chuỗi hex không hợp lệ')
    })

    test('Ném lỗi nếu đầu vào không hợp lệ', () => {
      expect(() => hexToString('')).toThrow('Input phải là một chuỗi hex hợp lệ')
    })
  })

  describe('hexToUtf8 - Chuyển đổi chuỗi hex sang UTF-8', () => {
    test('Chuyển đổi hex hợp lệ sang UTF-8', () => {
      expect(hexToUtf8('48656c6c6f')).toBe('Hello') // "Hello"
      expect(hexToUtf8('776f726c64')).toBe('world') // "world"
      expect(hexToUtf8('4869')).toBe('Hi') // "Hi"
      expect(hexToUtf8('20612062')).toBe(' a b') // " a b"
    })

    test('Chuỗi hex rỗng trả về chuỗi rỗng', () => {
      expect(hexToUtf8('')).toBe('')
    })

    test('Chuỗi hex có số ký tự lẻ gây lỗi', () => {
      expect(() => hexToUtf8('123')).toThrow('Invalid hex string')
      expect(() => hexToUtf8('a1b')).toThrow('Invalid hex string')
    })

    test('Chuỗi hex không hợp lệ gây lỗi', () => {
      expect(() => hexToUtf8('ZZZZ')).toThrow('Invalid hex string')
      expect(() => hexToUtf8('g1h2')).toThrow('Invalid hex string')
    })
  })

  describe('stringToBytes32 - Chuyển chuỗi thành định dạng bytes32', () => {
    test('Chuyển chuỗi ngắn thành bytes32', () => {
      expect(stringToBytes32('hello')).toBe(
        '0x68656c6c6f000000000000000000000000000000000000000000000000000000'
      )
    })

    test('Chuyển chuỗi có đúng 32 ký tự', () => {
      const input = 'a'.repeat(32) // Chuỗi 'aaaaaaaa...' (32 lần)
      const expected = `0x${'61'.repeat(32)}` // Mỗi 'a' = 0x61
      expect(stringToBytes32(input)).toBe(expected)
    })

    test('Chuỗi dài hơn 32 ký tự sẽ bị cắt ngắn', () => {
      const input = 'abcdefghijklmnopqrstuvwxyz0123456789' // 36 ký tự
      const expected = `0x${Buffer.from(input.slice(0, 32)).toString('hex')}` // Chỉ lấy 32 ký tự đầu
      expect(stringToBytes32(input)).toBe(expected)
    })

    test('Chuyển chuỗi rỗng thành bytes32', () => {
      expect(stringToBytes32('')).toBe(
        '0x0000000000000000000000000000000000000000000000000000000000000000'
      )
    })

    test('Chuyển ký tự đặc biệt thành bytes32', () => {
      expect(stringToBytes32('!@#$%')).toBe(
        '0x2140232425000000000000000000000000000000000000000000000000000000'
      )
    })

    test('Chuyển số dưới dạng chuỗi thành bytes32', () => {
      expect(stringToBytes32('123456')).toBe(
        '0x3132333435360000000000000000000000000000000000000000000000000000'
      )
    })
  })

  describe('convertExponentialToDecimal', () => {
    test('Chuyển đổi số không có exponent', () => {
      expect(convertExponentialToDecimal(12345)).toBe('12345')
      expect(convertExponentialToDecimal('67890')).toBe('67890')
    })

    test('Chuyển đổi số mũ dương', () => {
      expect(convertExponentialToDecimal(1.23e5)).toBe('123000')
      expect(convertExponentialToDecimal('4.56e3')).toBe('4560')
    })

    test('Chuyển đổi số mũ âm', () => {
      expect(convertExponentialToDecimal(1.23e-3)).toBe('0.00123')
      expect(convertExponentialToDecimal('5.678e-4')).toBe('0.0005678')
    })

    test('Chuyển đổi số mũ với dấu âm', () => {
      expect(convertExponentialToDecimal(-2.5e2)).toBe('-250')
      expect(convertExponentialToDecimal('-3.14e-2')).toBe('-0.0314')
    })

    test('Chuyển đổi số nguyên có exponent', () => {
      expect(convertExponentialToDecimal(2e3)).toBe('2000')
      expect(convertExponentialToDecimal('-7e2')).toBe('-700')
    })

    test('Số 0 với exponent', () => {
      expect(convertExponentialToDecimal(0e5)).toBe('0')
      expect(convertExponentialToDecimal('-0e3')).toBe('0')
    })
  })

  describe('mulTenPow', () => {
    test('Nhân với số mũ dương', () => {
      expect(mulTenPow(123.45, 2)).toBe('12345')
      expect(mulTenPow('0.0123', 3)).toBe('12.3')
      expect(mulTenPow('100', 2)).toBe('10000')
      expect(mulTenPow('1.5', 3)).toBe('1500')
    })

    test('Nhân với số mũ âm', () => {
      expect(mulTenPow('100', -2)).toBe('1')
      expect(mulTenPow(456, -3)).toBe('0.456')
      expect(mulTenPow('120', -1)).toBe('12')
      expect(mulTenPow('1234', -3)).toBe('1.234')
    })

    test('Không thay đổi khi số mũ là 0', () => {
      expect(mulTenPow('123', 0)).toBe('123')
      expect(mulTenPow(0.456, 0)).toBe('0.456')
    })

    test('Xử lý số 0', () => {
      expect(mulTenPow('0', 5)).toBe('0')
      expect(mulTenPow('0', -5)).toBe('0')
    })

    test('Xử lý undefined hoặc giá trị không hợp lệ', () => {
      expect(mulTenPow(undefined, 3)).toBe('')
    })
  })
})
