/**
 * Xử lý lỗi và trả về thông điệp lỗi thích hợp.
 * Hàm này sẽ kiểm tra nhiều trường hợp trong đối tượng lỗi và trả về thông điệp lỗi đầu tiên tìm được.
 *
 * @param error - Đối tượng lỗi cần xử lý, có thể là đối tượng lỗi tùy chỉnh hoặc lỗi mặc định.
 * @returns Thông điệp lỗi nếu tìm thấy, nếu không sẽ trả về lỗi dưới dạng chuỗi JSON.
 */
export const handleMessageError = (error: any): string => {
  // Kiểm tra các trường hợp phổ biến để lấy thông điệp lỗi
  if (typeof error === 'string') return error
  return (
    error?.data?.description || // Trường hợp có mô tả lỗi trong `data.description`
    error?.response?.data?.message || // Trường hợp có thông điệp trong `response.data.message`
    error?.message || // Trường hợp có thông điệp lỗi trong `message`
    JSON.stringify(error) // Trả về đối tượng lỗi dưới dạng chuỗi JSON nếu không tìm thấy thông điệp lỗi
  )
}
