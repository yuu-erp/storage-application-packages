/**
 * Tạo một chuỗi ngẫu nhiên gồm chữ và số với độ dài chỉ định.
 *
 * @param {number} length - Độ dài mong muốn của chuỗi được tạo.
 * @returns {string} Chuỗi ngẫu nhiên bao gồm chữ in hoa, chữ thường và số.
 * @throws {Error} Nếu độ dài không phải là một số nguyên dương.
 */
export function generateRandomString(length: number): string {
  if (!Number.isInteger(length) || length <= 0) {
    throw new Error('Độ dài phải là một số nguyên dương.')
  }

  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  const charactersLength = characters.length
  let result = Array.from({ length }, () =>
    characters.charAt(Math.floor(Math.random() * charactersLength))
  ).join('')

  return result
}
