/**
 * Kiểm tra xem địa chỉ có hợp lệ hay không (ví dụ: Ethereum)
 * @param address Địa chỉ blockchain
 * @returns true nếu hợp lệ, ngược lại false
 */
export function isValidAddress(address: string): boolean {
  return /^0x[a-fA-F0-9]{40}$/.test(address)
}

/**
 * Kiểm tra xem chuỗi đầu vào có phải là private key hợp lệ không.
 * Hàm này hỗ trợ cả địa chỉ có và không có tiền tố "0x".
 * @param privateKey - Chuỗi cần kiểm tra, đại diện cho private key.
 * @returns `true` nếu chuỗi là địa chỉ hợp lệ, ngược lại trả về `false`.
 */
export const isPrivateKey = (privateKey?: string) => {
  if (!privateKey || typeof privateKey !== 'string') return false
  const normalizedPrivateKey = privateKey.startsWith('0x') ? privateKey.slice(2) : privateKey
  return normalizedPrivateKey.length === 64 && /^[a-fA-F0-9]{64}$/.test(normalizedPrivateKey)
}

/**
 * Checks if a string is a valid hexadecimal.
 *
 * @param {string} str - The string to check.
 * @returns {boolean} - Returns true if the string is a valid hex, otherwise false.
 */
export function isByte32(str: string): boolean {
  return typeof str === 'string' && str.length === 64 && /^[0-9A-Fa-f]+$/.test(str)
}

/**
 * Kiểm tra xem tên nhập vào có hợp lệ hay không
 * @param name Tên nhập vào
 * @returns true nếu hợp lệ, ngược lại false
 */
export const isValidName = (name: string) => {
  if (!name.trim()) throw new Error("Name can't be empty !!") // Kiểm tra tên rỗng sau khi loại bỏ khoảng trắng đầu/cuối

  const regex = /^[a-zA-Z0-9 ]+$/ // Chỉ cho phép chữ cái, số và khoảng trắng
  if (!regex.test(name)) throw new Error('Text can only contain letters and numbers')

  return true
}

/**
 * Kiểm tra xem đối tượng có rỗng hay không.
 * Hàm này kiểm tra đối với các kiểu dữ liệu như chuỗi, mảng, và đối tượng.
 *
 * @param d - Đối tượng hoặc chuỗi cần kiểm tra.
 * @returns `true` nếu đối tượng là rỗng, ngược lại trả về `false`.
 */
export const isEmpty = (d: any): boolean => {
  // Kiểm tra trường hợp nếu đối tượng là null hoặc undefined
  if (d == null) return true

  // Kiểm tra các loại đối tượng có thể có thuộc tính length (ví dụ: chuỗi hoặc mảng)
  if (typeof d === 'object') {
    // Trường hợp là mảng hoặc chuỗi
    if (Array.isArray(d) || typeof d === 'string') {
      return d.length === 0
    }

    // Trường hợp là đối tượng, kiểm tra số lượng keys của nó
    return Object.keys(d).length === 0
  }

  // Nếu không phải object, trả về true nếu giá trị là falsy (undefined, null, false, 0, '', NaN)
  return !d
}
