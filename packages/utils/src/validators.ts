/**
 * Kiểm tra xem địa chỉ có hợp lệ hay không (ví dụ: Ethereum)
 * @param address Địa chỉ blockchain
 * @returns true nếu hợp lệ, ngược lại false
 */
export function isValidAddress(address: string): boolean {
  return /^0x[a-fA-F0-9]{40}$/.test(address);
}

/**
 * Kiểm tra xem chuỗi đầu vào có phải là private key hợp lệ không.
 * Hàm này hỗ trợ cả địa chỉ có và không có tiền tố "0x".
 * @param {string} privateKey - Chuỗi cần kiểm tra, đại diện cho private key.
 * @returns {boolean} `true` nếu chuỗi là địa chỉ hợp lệ, ngược lại trả về `false`.
 */
export const isPrivateKey = (privateKey?: string) => {
  if (!privateKey || typeof privateKey !== "string") return false;
  const normalizedPrivateKey = privateKey.startsWith("0x")
    ? privateKey.slice(2)
    : privateKey;
  return (
    normalizedPrivateKey.length === 64 &&
    /^[a-fA-F0-9]{64}$/.test(normalizedPrivateKey)
  );
};

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
  const regex = /^[A-Za-zÀ-ỹ\s]{2,50}$/;
  return regex.test(name.trim());
};

/**
 * Kiểm tra xem đối tượng có rỗng hay không.
 * Hàm này kiểm tra đối với các kiểu dữ liệu như chuỗi, mảng, và đối tượng.
 *
 * @param d - Đối tượng hoặc chuỗi cần kiểm tra.
 * @returns `true` nếu đối tượng là rỗng, ngược lại trả về `false`.
 */
export const isEmpty = (d: any): boolean => {
  // Kiểm tra trường hợp nếu đối tượng là null hoặc undefined
  if (d == null) return true;
  // Kiểm tra các loại đối tượng có thể có thuộc tính length (ví dụ: chuỗi hoặc mảng)
  if (typeof d === "object") {
    // Trường hợp là mảng hoặc chuỗi
    if (Array.isArray(d) || typeof d === "string") {
      return d.length === 0;
    }
    // Trường hợp là đối tượng, kiểm tra số lượng keys của nó
    return Object.keys(d).length === 0;
  }
  // Nếu không phải object, trả về true nếu giá trị là falsy (undefined, null, false, 0, '', NaN)
  return !d;
};

/**
 * Checks if a string is a valid hexadecimal.
 *
 * @param {string} str - The string to check.
 * @returns {boolean} - Returns true if the string is a valid hex, otherwise false.
 */
export function isByte32(str: string): boolean {
  return (
    typeof str === "string" && str.length === 64 && /^[0-9A-Fa-f]+$/.test(str)
  );
}

/**
 * Kiểm tra xem một chuỗi có phải là chuỗi hex hợp lệ hay không.
 *
 * Điều kiện hợp lệ:
 * - Chỉ chứa các ký tự số (0-9) hoặc chữ cái hex (a-f, A-F).
 * - Độ dài của chuỗi phải là số chẵn (mỗi byte có 2 ký tự).
 *
 * @param str - Chuỗi cần kiểm tra.
 * @returns `true` nếu chuỗi là hex hợp lệ, ngược lại trả về `false`.
 */
export function isHex(str: string) {
  if (typeof str !== "string") {
    return false; // Input must be a string
  }

  // Check if the string only contains hex characters (0-9, a-f, A-F) and has an even length
  const hexRegex = /^[0-9a-fA-F]+$/;
  return str.length % 2 === 0 && hexRegex.test(str);
}
