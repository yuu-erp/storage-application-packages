/**
 * Kiểm tra xem địa chỉ có hợp lệ hay không (ví dụ: Ethereum)
 * @param address Địa chỉ blockchain
 * @returns true nếu hợp lệ, ngược lại false
 */
export function isValidAddress(address: string): boolean {
  return /^0x[a-fA-F0-9]{40}$/.test(address)
}

/**
 * Kiểm tra xem một tên có hợp lệ hay không.
 *
 * - Chỉ cho phép chữ cái (bao gồm dấu tiếng Việt) và khoảng trắng.
 * - Độ dài phải từ 2 đến 50 ký tự.
 * - Không chấp nhận số hoặc ký tự đặc biệt.
 * - Tự động loại bỏ khoảng trắng đầu và cuối trước khi kiểm tra.
 *
 * @param {string} name - Tên cần kiểm tra.
 * @returns {boolean} - `true` nếu hợp lệ, `false` nếu không hợp lệ.
 */
export const isValidName = (name: string) => {
  const regex = /^[A-Za-zÀ-ỹ\s]{2,50}$/
  return regex.test(name.trim())
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
