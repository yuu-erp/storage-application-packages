/**
 * Kiểm tra xem địa chỉ có hợp lệ hay không (ví dụ: Ethereum)
 * @param address Địa chỉ blockchain
 * @returns true nếu hợp lệ, ngược lại false
 */
export function isValidAddress(address: string): boolean {
  return /^0x[a-fA-F0-9]{40}$/.test(address)
}
