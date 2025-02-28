/**
 * Kiểm tra xem một tên thư mục có hợp lệ hay không.
 *
 * - Chỉ cho phép chữ cái, số, dấu gạch ngang (-) và dấu gạch dưới (_).
 * - Không cho phép khoảng trắng hoặc ký tự đặc biệt khác.
 * - Độ dài phải từ 1 đến 100 ký tự.
 *
 * @param {string} folderName - Tên thư mục cần kiểm tra.
 * @returns {boolean} - `true` nếu hợp lệ, `false` nếu không hợp lệ.
 *
 * @example
 * isValidFolderName("my-folder"); // true
 * isValidFolderName("backup_2024"); // true
 * isValidFolderName("project v1"); // false (chứa khoảng trắng)
 * isValidFolderName("Invalid@Name!"); // false (chứa ký tự đặc biệt)
 */
export const isValidFolderName = (folderName: string): boolean => {
  const regex = /^[a-zA-Z0-9_-]{1,100}$/
  return regex.test(folderName)
}
