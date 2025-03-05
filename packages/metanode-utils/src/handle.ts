/**
 * Lấy phần cuối cùng của URL (pathname) từ `window.location.href`,
 * loại bỏ phần query string nếu có.
 *
 * @returns Phần cuối cùng của URL sau dấu chấm hỏi ('?') nếu có, nếu không trả về URL gốc.
 *
 * @note Đã tối ưu
 */
export const getLastPathname = (): string => {
  // Tách URL theo dấu hỏi (?) và dùng pop() lấy phần cuối cùng sau dấu '?'
  return window.location.href.split('?').pop() || ''
}

/**
 * Xử lý lỗi và trả về thông điệp lỗi thích hợp.
 * Hàm này sẽ kiểm tra nhiều trường hợp trong đối tượng lỗi và trả về thông điệp lỗi đầu tiên tìm được.
 *
 * @param error - Đối tượng lỗi cần xử lý, có thể là đối tượng lỗi tùy chỉnh hoặc lỗi mặc định.
 * @returns Thông điệp lỗi nếu tìm thấy, nếu không sẽ trả về lỗi dưới dạng chuỗi JSON.
 */
export const handleMessageError = (error: any): string => {
  if (typeof error === 'string') return error
  return (
    error?.data?.description || // Trường hợp có mô tả lỗi trong `data.description`
    error?.response?.data?.message || // Trường hợp có thông điệp trong `response.data.message`
    error?.message || // Trường hợp có thông điệp lỗi trong `message`
    JSON.stringify(error) // Trả về đối tượng lỗi dưới dạng chuỗi JSON nếu không tìm thấy thông điệp lỗi
  )
}

/**
 * Hàm debounce trì hoãn việc thực thi một hàm cho đến sau một khoảng thời gian kể từ lần gọi cuối,
 * giúp hạn chế các lần gọi không cần thiết.
 *
 * @param func - Hàm cần debounce.
 * @param wait - Thời gian chờ (ms) trước khi thực thi.
 * @returns Hàm mới chỉ chạy `func` sau `wait` ms kể từ lần gọi cuối.
 */
export const debounce = (func: Function, wait: number) => {
  let timeout: any

  return (...args: any[]) => {
    const later = () => {
      timeout = null
      func(...args)
    }

    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

/**
 * Chuyển đổi chuỗi JSON hoặc dữ liệu JavaScript thành đối tượng hoặc mảng.
 * Đồng thời, thay thế chuỗi `"true"` và `"false"` thành giá trị boolean tương ứng.
 *
 * @param data - Dữ liệu đầu vào có thể là chuỗi JSON hoặc đối tượng/mảng.
 * @returns Đối tượng hoặc mảng đã được parse từ JSON.
 */
export const parseData = (data: any) => {
  if (!data) return data

  const _data =
    typeof data === 'string' && (data.includes('{') || data.includes('['))
      ? data
      : JSON.stringify(data)

  return JSON.parse(
    //@ts-ignore
    _data.replaceAll('"true"', 'true').replaceAll('"false"', 'false')
  )
}

/**
 * Chuyển đổi chuỗi hex thành chuỗi ký tự có thể đọc được.
 *
 * @param hex - Chuỗi hex cần chuyển đổi.
 * @returns Chuỗi ký tự tương ứng từ chuỗi hex đầu vào.
 * @throws Lỗi nếu đầu vào không phải là chuỗi hex hợp lệ.
 */
export function hexToString(hex: string) {
  if (!hex || typeof hex !== 'string') {
    throw new Error('Input phải là một chuỗi hex hợp lệ')
  }

  // Loại bỏ tiền tố "0x" nếu có
  hex = hex.startsWith('0x') ? hex.slice(2) : hex

  // Kiểm tra xem chuỗi có số lượng ký tự là chẵn không
  if (hex.length % 2 !== 0) {
    throw new Error('Chuỗi hex không hợp lệ')
  }

  let result = ''
  for (let i = 0; i < hex.length; i += 2) {
    const byte = hex.substring(i, i + 2)
    const charCode = parseInt(byte, 16)

    // Bỏ qua các ký tự không in được
    if (charCode > 31 && charCode < 127) {
      result += String.fromCharCode(charCode)
    }
  }
  return result
}

/**
 * Chuyển đổi một chuỗi hex thành chuỗi UTF-8.
 *
 * @param hex - Chuỗi hex cần chuyển đổi.
 * @returns Chuỗi UTF-8 được chuyển đổi từ chuỗi hex.
 * @throws Lỗi nếu chuỗi hex có số ký tự lẻ.
 */
export function hexToUtf8(hex: string) {
  // Ensure that the hex string has an even number of characters
  if (typeof hex === 'string' && hex.length % 2 !== 0) {
    throw new Error('Invalid hex string')
  }

  // Convert each pair of hex characters to a decimal number and then to a UTF-8 character
  let utf8String = ''
  for (let i = 0; i < hex.length; i += 2) {
    const hexPair = hex.substr(i, 2)
    const decimalValue = parseInt(hexPair, 16)
    utf8String += String.fromCharCode(decimalValue)
  }

  return utf8String
}

/**
 * Chuyển đổi một chuỗi thành định dạng hexadecimal 32 byte (`bytes32`).
 *
 * @param {string} str - Chuỗi đầu vào cần chuyển đổi.
 * @returns {string} - Chuỗi hexadecimal 32 byte (bắt đầu bằng `0x`).
 *
 * @description
 * - Hàm này chuyển từng ký tự trong chuỗi thành giá trị ASCII tương ứng.
 * - Lưu các giá trị ASCII này vào một mảng có kích thước 32 byte.
 * - Nếu chuỗi có độ dài nhỏ hơn 32 byte, các byte còn lại sẽ được lấp đầy bằng `0x00`.
 * - Kết quả trả về là một chuỗi hexadecimal (`bytes32`).
 *
 * @note
 * - Nếu chuỗi đầu vào dài hơn **31 ký tự**, nó sẽ bị cắt ngắn để đảm bảo không vượt quá 32 byte.
 */
export const stringToBytes32 = (str: string): string => {
  // Tạo một mảng 32 byte, mặc định tất cả phần tử là 0x00
  const bytes: Uint8Array = new Uint8Array(32)

  // Chuyển từng ký tự trong chuỗi thành mã ASCII và lưu vào mảng byte
  for (let i = 0; i < str.length; i++) {
    if (i >= 32) break // Đảm bảo mảng không vượt quá 32 byte
    bytes[i] = str.charCodeAt(i)
  }

  // Chuyển mảng byte thành chuỗi hexadecimal
  let hexString = '0x'
  for (let byte of bytes) {
    hexString += byte.toString(16).padStart(2, '0') // Đảm bảo mỗi byte có đúng 2 ký tự hex
  }

  return hexString
}

/**
 * Chuyển đổi số ở dạng khoa học (exponential) thành số thập phân đầy đủ.
 *
 * @param {number | string} numberInput - Số cần chuyển đổi (có thể là số hoặc chuỗi).
 * @returns {string} - Chuỗi số ở dạng thập phân đầy đủ, giữ nguyên dấu nếu có.
 */
export function convertExponentialToDecimal(numberInput: number | string) {
  let numStr = String(numberInput)
  let sign = ''

  // Kiểm tra và lưu lại dấu âm nếu có
  if (numStr.charAt(0) === '-') {
    sign = '-'
    numStr = numStr.substring(1)
  }

  // Tách phần cơ số và số mũ (exponent) nếu có
  const [base, exponent] = numStr.split(/[eE]/)

  // Nếu không có số mũ, trả về nguyên giá trị
  if (!exponent) return sign + numStr

  // Xác định dấu phân cách thập phân theo chuẩn hệ thống
  const decimalSeparator = (1.1).toLocaleString().substring(1, 2)
  const [leftPart, rightPart = ''] = base.split(decimalSeparator)
  const expValue = parseInt(exponent, 10)

  let result

  if (expValue > 0) {
    // Dịch chuyển dấu thập phân sang phải
    const rightPadding = Math.max(expValue - rightPart.length, 0)
    const rightExpanded = rightPart + '0'.repeat(rightPadding)
    result =
      leftPart + rightExpanded.slice(0, expValue) + decimalSeparator + rightExpanded.slice(expValue)

    // Xóa dấu thập phân nếu không còn phần thập phân
    if (result.endsWith(decimalSeparator)) result = result.slice(0, -1)
  } else {
    // Dịch chuyển dấu thập phân sang trái
    const leftPadding = Math.max(Math.abs(expValue) - leftPart.length, 0)
    const leftExpanded = '0'.repeat(leftPadding) + leftPart
    result =
      leftExpanded.slice(0, expValue) + decimalSeparator + leftExpanded.slice(expValue) + rightPart

    // Đảm bảo số có dạng hợp lệ, thêm '0' nếu cần
    if (result.startsWith(decimalSeparator)) result = '0' + result
  }

  return sign + result
}

/**
 * Nhân một số với 10 mũ `decimal` mà không làm mất độ chính xác.
 *
 * @param {string | number | undefined} number - Số cần nhân (chuỗi hoặc số).
 * @param {number} decimal - Số mũ của 10 để nhân với `number`.
 * @returns {string} - Kết quả nhân dưới dạng chuỗi, đảm bảo chính xác.
 *
 * @example
 * mulTenPow(123.45, 2) // "12345"
 * mulTenPow("0.0123", 3) // "12.3"
 * mulTenPow("100", -2) // "1"
 * mulTenPow(456, -3) // "0.456"
 */
export function mulTenPow(number: string | number | undefined, decimal: number): string {
  if (typeof number === 'undefined') return ''
  const num = String(number)
  if (num === '0') return '0' // Trường hợp đặc biệt cho số 0
  if (!decimal) return num

  let result = ''

  // Tách phần nguyên và phần thập phân (nếu có)
  let [intPart, decPart = ''] = num.split('.')

  // Đảm bảo phần nguyên không bị giữ số 0 không cần thiết nhưng vẫn giữ số 0 nếu cần
  intPart = intPart.replace(/^0+(\d)/, '$1')
  if (intPart === '') intPart = '0'

  if (decimal > 0) {
    // Dịch dấu thập phân sang phải
    const extendedDec = decPart + '0'.repeat(Math.max(0, decimal - decPart.length))
    result = intPart.replace(/^0+/, '') + extendedDec.slice(0, decimal)

    // Nếu còn phần thập phân sau khi dịch chuyển
    if (extendedDec.length > decimal) {
      result += '.' + extendedDec.slice(decimal).replace(/0+$/, '')
    }
  } else {
    // Dịch dấu thập phân sang trái
    const absDecimal = Math.abs(decimal)
    if (intPart.length <= absDecimal) {
      result = `0.${`${'0'.repeat(absDecimal - intPart.length)}${intPart}${decPart}`.replace(/0+$/, '')}`
    } else {
      result = `${intPart
        .slice(0, -absDecimal)
        .replace(/^0+/, '')}.${`${intPart.slice(-absDecimal)}${decPart}`.replace(/0+$/, '')}`
    }
  }

  // Xóa dấu "." nếu không còn phần thập phân
  if (result.endsWith('.')) result = result.slice(0, -1)
  return result
}
