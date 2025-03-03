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
    `${str.toString().slice(0, start)}${placeholder}${str.toString().slice(-end)}`

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

/**
 * Loại bỏ dấu tiếng Việt khỏi chuỗi, chuyển các ký tự có dấu thành không dấu.
 *
 * - Duyệt qua danh sách các ký tự có dấu.
 * - Thay thế các ký tự có dấu bằng ký tự không dấu tương ứng.
 *
 * @param str - Chuỗi đầu vào có thể chứa dấu.
 * @returns Chuỗi đã được loại bỏ dấu.
 */
export const removeAccents = (str: string) => {
  var AccentsMap = [
    'aàảãáạăằẳẵắặâầẩẫấậ',
    'AÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬ',
    'dđ',
    'DĐ',
    'eèẻẽéẹêềểễếệ',
    'EÈẺẼÉẸÊỀỂỄẾỆ',
    'iìỉĩíị',
    'IÌỈĨÍỊ',
    'oòỏõóọôồổỗốộơờởỡớợ',
    'OÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢ',
    'uùủũúụưừửữứự',
    'UÙỦŨÚỤƯỪỬỮỨỰ',
    'yỳỷỹýỵ',
    'YỲỶỸÝỴ'
  ]
  for (var i = 0; i < AccentsMap.length; i++) {
    var re = new RegExp('[' + AccentsMap[i].substr(1) + ']', 'g')
    var char = AccentsMap[i][0]
    str = str.replace(re, char)
  }
  return str
}

/**
 * Chuyển đối tượng thành chuỗi truy vấn (query string) cho URL.
 * Hàm này sử dụng URLSearchParams để tạo chuỗi truy vấn từ các cặp khóa-giá trị trong đối tượng.
 *
 * @param object - Đối tượng cần chuyển đổi thành chuỗi truy vấn.
 * @returns Một chuỗi truy vấn (query string), bắt đầu với dấu "?".
 */
export const toUrlSearch = (object: any) => '?' + new URLSearchParams(object)
