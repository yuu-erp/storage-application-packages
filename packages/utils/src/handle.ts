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
  return window.location.href.split("?").pop() || "";
};

/**
 * Xử lý lỗi và trả về thông điệp lỗi thích hợp.
 * Hàm này sẽ kiểm tra nhiều trường hợp trong đối tượng lỗi và trả về thông điệp lỗi đầu tiên tìm được.
 *
 * @param error - Đối tượng lỗi cần xử lý, có thể là đối tượng lỗi tùy chỉnh hoặc lỗi mặc định.
 * @returns Thông điệp lỗi nếu tìm thấy, nếu không sẽ trả về lỗi dưới dạng chuỗi JSON.
 */
export const handleMessageError = (error: any): string => {
  if (typeof error === "string") return error;
  return (
    error?.data?.description || // Trường hợp có mô tả lỗi trong `data.description`
    error?.response?.data?.message || // Trường hợp có thông điệp trong `response.data.message`
    error?.message || // Trường hợp có thông điệp lỗi trong `message`
    JSON.stringify(error) // Trả về đối tượng lỗi dưới dạng chuỗi JSON nếu không tìm thấy thông điệp lỗi
  );
};

/**
 * Hàm debounce trì hoãn việc thực thi một hàm cho đến sau một khoảng thời gian kể từ lần gọi cuối,
 * giúp hạn chế các lần gọi không cần thiết.
 *
 * @param func - Hàm cần debounce.
 * @param wait - Thời gian chờ (ms) trước khi thực thi.
 * @returns Hàm mới chỉ chạy `func` sau `wait` ms kể từ lần gọi cuối.
 */
export const debounce = (func: Function, wait: number) => {
  let timeout: any;

  return (...args: any[]) => {
    const later = () => {
      timeout = null;
      func(...args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

/**
 * Chuyển đổi chuỗi JSON hoặc dữ liệu JavaScript thành đối tượng hoặc mảng.
 * Đồng thời, thay thế chuỗi `"true"` và `"false"` thành giá trị boolean tương ứng.
 *
 * @param data - Dữ liệu đầu vào có thể là chuỗi JSON hoặc đối tượng/mảng.
 * @returns Đối tượng hoặc mảng đã được parse từ JSON.
 */
export const parseData = (data: any) => {
  if (!data) return data;

  const _data =
    typeof data === "string" && (data.includes("{") || data.includes("["))
      ? data
      : JSON.stringify(data);

  return JSON.parse(
    //@ts-ignore
    _data.replaceAll('"true"', "true").replaceAll('"false"', "false"),
  );
};

/**
 * Chuyển đổi chuỗi hex thành chuỗi ký tự có thể đọc được.
 *
 * @param hex - Chuỗi hex cần chuyển đổi.
 * @returns Chuỗi ký tự tương ứng từ chuỗi hex đầu vào.
 * @throws Lỗi nếu đầu vào không phải là chuỗi hex hợp lệ.
 */
export function hexToString(hex: string) {
  if (!hex || typeof hex !== "string") {
    throw new Error("Input phải là một chuỗi hex hợp lệ");
  }

  // Loại bỏ tiền tố "0x" nếu có
  hex = hex.startsWith("0x") ? hex.slice(2) : hex;

  // Kiểm tra xem chuỗi có số lượng ký tự là chẵn không
  if (hex.length % 2 !== 0) {
    throw new Error("Chuỗi hex không hợp lệ");
  }

  let result = "";
  for (let i = 0; i < hex.length; i += 2) {
    const byte = hex.substring(i, i + 2);
    const charCode = parseInt(byte, 16);

    // Bỏ qua các ký tự không in được
    if (charCode > 31 && charCode < 127) {
      result += String.fromCharCode(charCode);
    }
  }
  return result;
}

/**
 * Chuyển đổi một chuỗi hex thành chuỗi UTF-8.
 *
 * @param hex - Chuỗi hex cần chuyển đổi.
 * @returns Chuỗi UTF-8 được chuyển đổi từ chuỗi hex.
 * @throws Lỗi nếu chuỗi hex có số ký tự lẻ.
 */
export function hexToUtf8(hex: string) {
  if (hex === "") {
    return "";
  }
  // Ensure that the hex string has an even number of characters
  if (
    typeof hex !== "string" ||
    hex.length % 2 !== 0 ||
    !/^[0-9a-fA-F]+$/.test(hex)
  ) {
    throw new Error("Invalid hex string");
  }

  // Convert each pair of hex characters to a decimal number and then to a UTF-8 character
  let utf8String = "";
  for (let i = 0; i < hex.length; i += 2) {
    const hexPair = hex.substr(i, 2);
    const decimalValue = parseInt(hexPair, 16);
    utf8String += String.fromCharCode(decimalValue);
  }

  return utf8String;
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
  const bytes: Uint8Array = new Uint8Array(32);

  // Chuyển từng ký tự trong chuỗi thành mã ASCII và lưu vào mảng byte
  for (let i = 0; i < str.length; i++) {
    if (i >= 32) break; // Đảm bảo mảng không vượt quá 32 byte
    bytes[i] = str.charCodeAt(i);
  }

  // Chuyển mảng byte thành chuỗi hexadecimal
  let hexString = "0x";
  for (let byte of bytes) {
    hexString += byte.toString(16).padStart(2, "0"); // Đảm bảo mỗi byte có đúng 2 ký tự hex
  }

  return hexString;
};
