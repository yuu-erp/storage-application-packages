/**
 * Định dạng địa chỉ Ethereum: Chuyển thành chữ thường và chuẩn hóa checksum
 * @param address Địa chỉ Ethereum cần định dạng
 * @returns Địa chỉ Ethereum đã chuẩn hóa
 */
export function formatAddress(address: string): string {
  return address.toLowerCase()
}

/**
 * Cắt ngắn chuỗi theo chiều vị trí đã chọn và thêm dấu chấm thay thế nếu chuỗi quá dài.
 *
 * @param str - Chuỗi cần cắt ngắn.
 * @param length - Độ dài mỗi phần của chuỗi khi cắt (mặc định là 6).
 * @param position - Vị trí cắt chuỗi, có thể là 'start', 'center', hoặc 'end' (mặc định là 'center').
 * @param placeholder - Ký tự thay thế khi cắt chuỗi, mặc định là '...'.
 * @returns Chuỗi đã cắt ngắn, có thêm dấu chấm thay thế nếu cần.
 */
export const truncateString = (
  str?: string,
  length = 6,
  position: 'start' | 'center' | 'end' = 'center',
  placeholder: string = '...'
): string => {
  if (!str || str.length <= length * 2) return str || '' // Trả về chuỗi gốc nếu không cần cắt hoặc chuỗi trống

  // Tạo một hàm phụ để tránh lặp lại mã
  const getTruncated = (start: number, end: number) =>
    `${str.slice(0, start)}${placeholder}${str.slice(-end)}`

  switch (position) {
    case 'start':
      return placeholder + str.slice(-2 * length) // Cắt từ đầu chuỗi
    case 'center':
      return getTruncated(length, length) // Cắt ở giữa chuỗi
    case 'end':
      return str.slice(0, 2 * length) + placeholder // Cắt từ cuối chuỗi
    default:
      return str // Nếu không xác định, trả về chuỗi gốc
  }
}
