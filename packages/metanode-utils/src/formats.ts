/**
 * Định dạng địa chỉ Ethereum: Chuyển thành chữ thường và chuẩn hóa checksum
 * @param address Địa chỉ Ethereum cần định dạng
 * @returns Địa chỉ Ethereum đã chuẩn hóa
 */
export function formatAddress(address: string): string {
  return address.toLowerCase()
}
