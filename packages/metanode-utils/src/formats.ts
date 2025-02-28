/**
 * Định dạng địa chỉ Ethereum: Chuyển thành chữ thường và chuẩn hóa checksum
 * @param address Địa chỉ Ethereum cần định dạng
 * @returns Địa chỉ Ethereum đã chuẩn hóa
 */
export function formatAddress(address: string): string {
  // chuyển thành chử thường dùng hàm toLowerCase() của javascript ( không biết thì search google )
  return address.toLowerCase()
}
