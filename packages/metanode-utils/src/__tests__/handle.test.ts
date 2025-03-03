import { debounce, handleMessageError } from '../handle'

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
      expect(handleMessageError(undefined)).toBe('undefined')
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
})
