/**
 * Định dạng địa chỉ Ethereum: Chuyển thành chữ thường và chuẩn hóa checksum
 * @param address Địa chỉ Ethereum cần định dạng
 * @returns Địa chỉ Ethereum đã chuẩn hóa
 */
export function formatAddress(address: string): string {
  return address.toLowerCase();
}

/**
 * Cắt ngắn chuỗi theo chiều vị trí đã chọn và thêm dấu chấm thay thế nếu chuỗi quá dài.
 *
 * @param str - Chuỗi cần cắt ngắn.
 * @param length - Độ dài mỗi phần của chuỗi khi cắt (mặc định là 6).
 * @param position - Vị trí cắt chuỗi, có thể là 'start', 'center', hoặc 'end' (mặc định là 'center').
 * @param placeholder - Ký tự thay thế khi cắt chuỗi, mặc định là '...'.
 * @returns Chuỗi đã cắt ngắn, có thêm dấu chấm thay thế nếu cần.
 */
export const truncateString = (
  str?: string,
  length = 6,
  position: "start" | "center" | "end" = "center",
  placeholder: string = "...",
): string => {
  if (!str || str.length <= length * 2) return str || ""; // Trả về chuỗi gốc nếu không cần cắt hoặc chuỗi trống

  // Tạo một hàm phụ để tránh lặp lại mã
  const getTruncated = (start: number, end: number) =>
    `${str.toString().slice(0, start)}${placeholder}${str.toString().slice(-end)}`;

  switch (position) {
    case "start":
      return placeholder + str.slice(-2 * length); // Cắt từ đầu chuỗi
    case "center":
      return getTruncated(length, length); // Cắt ở giữa chuỗi
    case "end":
      return str.slice(0, 2 * length) + placeholder; // Cắt từ cuối chuỗi
    default:
      return str; // Nếu không xác định, trả về chuỗi gốc
  }
};

/**
 * Rút gọn chuỗi bằng cách hiển thị phần đầu và cuối, chèn dấu "..." ở giữa.
 *
 * @param {string} text - Chuỗi cần rút gọn.
 * @param {number} [length=6] - Độ dài tối đa của chuỗi hiển thị (bao gồm cả dấu "...").
 * @returns {string} - Chuỗi đã được rút gọn.
 */
export const shortString = (text: string, length: number = 6) => {
  if (text.length < length) return text;
  const half = Math.floor(length / 2);
  return `${text.slice(0, half)}...${text.slice(-half)}`;
};

/**
 * Loại bỏ dấu tiếng Việt khỏi chuỗi, chuyển các ký tự có dấu thành không dấu.
 *
 * - Duyệt qua danh sách các ký tự có dấu.
 * - Thay thế các ký tự có dấu bằng ký tự không dấu tương ứng.
 *
 * @param str - Chuỗi đầu vào có thể chứa dấu.
 * @returns Chuỗi đã được loại bỏ dấu.
 */
export const removeAccents = (str: string): string => {
  const accentMap: { [key: string]: string } = {
    àảãáạăằẳẵắặâầẩẫấậ: "a",
    ÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬ: "A",
    đ: "d",
    Đ: "D",
    èẻẽéẹêềểễếệ: "e",
    ÈẺẼÉẸÊỀỂỄẾỆ: "E",
    ìỉĩíị: "i",
    ÌỈĨÍỊ: "I",
    òỏõóọôồổỗốộơờởỡớợ: "o",
    ÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢ: "O",
    ùủũúụưừửữứự: "u",
    ÙỦŨÚỤƯỪỬỮỨỰ: "U",
    ỳỷỹýỵ: "y",
    ỲỶỸÝỴ: "Y",
  };

  let result = str;
  for (const [accents, replacement] of Object.entries(accentMap)) {
    const re = new RegExp(`[${accents}]`, "g");
    result = result.replace(re, replacement);
  }
  return result;
};

/**
 * Chuyển đối tượng thành chuỗi truy vấn (query string) cho URL.
 * Hàm này sử dụng URLSearchParams để tạo chuỗi truy vấn từ các cặp khóa-giá trị trong đối tượng.
 *
 * @param object - Đối tượng cần chuyển đổi thành chuỗi truy vấn.
 * @returns Một chuỗi truy vấn (query string), bắt đầu với dấu "?".
 */
export const toUrlSearch = (object: any) => "?" + new URLSearchParams(object);

export const SEED_SECRECT = "Mx3S5";
/**
 * Chuyển danh sách 24 chuỗi thành một chuỗi mã hóa duy nhất.
 * Mỗi từ sẽ được tiền tố bằng một ký tự tương ứng với độ dài của nó, dựa trên bảng quy tắc.
 * Sau đó, tất cả sẽ được nối lại và thêm tiền tố SEED_SECRECT ở đầu.
 *
 * @param list - Một mảng gồm 24 chuỗi cần được mã hóa.
 * @returns Một chuỗi duy nhất chứa thông tin của toàn bộ danh sách.
 * @throws Nếu danh sách không có đúng 24 phần tử.
 */
export const seedToString = (list: string[]) => {
  if (list.length !== 24) throw new Error("Invalid list seed");
  const rules = {
    1: "A",
    2: "B",
    3: "C",
    4: "D",
    5: "E",
    6: "F",
    7: "G",
    8: "H",
    9: "I",
    10: "J",
    11: "K",
    12: "L",
    13: "M",
    14: "N",
    15: "O",
    16: "P",
    17: "Q",
    18: "R",
    19: "S",
    20: "T",
    21: "U",
    22: "V",
    23: "W",
    24: "X",
    25: "Y",
    26: "Z",
    27: "A",
    28: "B",
    29: "C",
    30: "D",
    31: "E",
    32: "F",
    33: "G",
    34: "H",
    35: "I",
    36: "J",
    37: "K",
    38: "L",
    39: "M",
    40: "N",
    41: "O",
    42: "P",
    43: "Q",
    44: "R",
    45: "S",
    46: "T",
    47: "U",
    48: "V",
    49: "W",
    50: "X",
    51: "Y",
    52: "Z",
  };

  const str = list
    .map((elm) => {
      const name = elm;
      const len = name.length;
      return `${rules[len as keyof typeof rules]}${name}`;
    })
    .join("");
  return `${SEED_SECRECT}${str}`;
};

/**
 * Giải mã một chuỗi đã được tạo bởi `seedToString` để lấy lại danh sách 24 chuỗi ban đầu.
 * Hàm sẽ phân tích chuỗi đầu vào dựa trên các ký tự đầu tiên của từng phần tử để xác định độ dài của nó.
 *
 * @param str - Chuỗi đầu vào đã được mã hóa bằng `seedToString`.
 * @returns Một mảng gồm 24 chuỗi gốc đã được trích xuất từ chuỗi mã hóa.
 * @throws Nếu chuỗi không bắt đầu bằng tiền tố SEED_SECRECT.
 */
export function strToSeed(str: string) {
  const prefix = str.slice(0, 5);
  if (prefix !== SEED_SECRECT) throw new Error("Invalid seed string");
  str = str.slice(5);
  var rules = {
    A: 1,
    B: 2,
    C: 3,
    D: 4,
    E: 5,
    F: 6,
    G: 7,
    H: 8,
    I: 9,
    J: 10,
    K: 11,
    L: 12,
    M: 13,
    N: 14,
    O: 15,
    P: 16,
    Q: 17,
    R: 18,
    S: 19,
    T: 20,
    U: 21,
    V: 22,
    W: 23,
    X: 24,
    Y: 25,
    Z: 26,
    a: 27,
    b: 28,
    c: 29,
    d: 30,
    e: 31,
    f: 32,
    g: 33,
    h: 34,
    i: 35,
    j: 36,
    k: 37,
    l: 38,
    m: 39,
    n: 40,
    o: 41,
    p: 42,
    q: 43,
    r: 44,
    s: 45,
    t: 46,
    u: 47,
    v: 48,
    w: 49,
    x: 50,
    y: 51,
    z: 52,
  };
  var arr: any[] = [];
  var start = 0;
  while (arr.length < 24) {
    const firtLetter = str.substr(start, 1);
    var subLen = rules[firtLetter as keyof typeof rules];
    const seed: any = str.substr(start + 1, subLen);
    arr.push(seed);
    start = start + subLen + 1;
  }
  return arr;
}

export function hexToRgb(hex: string): string {
  hex = hex.replace("#", "");

  var r = parseInt(hex.substring(0, 2), 16);
  var g = parseInt(hex.substring(2, 4), 16);
  var b = parseInt(hex.substring(4, 6), 16);

  return "rgb(" + r + ", " + g + ", " + b + ")";
}

export function hslToHex(h: number, s: number, l: number): string {
  l /= 100;
  const a = (s * Math.min(l, 1 - l)) / 100;
  const f = (n: number): string => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color)
      .toString(16)
      .padStart(2, "0");
  };
  return `#${f(0)}${f(8)}${f(4)}`;
}

export function hexToHsl(hex: string): { h: number; s: number; l: number } {
  // Remove the "#" if present
  hex = hex.replace(/^#/, "");

  // Parse the hex values
  let r = parseInt(hex.substring(0, 2), 16);
  let g = parseInt(hex.substring(2, 4), 16);
  let b = parseInt(hex.substring(4, 6), 16);

  // Convert the RGB values to a scale of 0 to 1
  r /= 255;
  g /= 255;
  b /= 255;

  // Find the min and max values to calculate Lightness
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0,
    s,
    l = (max + min) / 2;

  if (max === min) {
    // Achromatic (no color)
    h = s = 0;
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
      default:
        break;
    }

    h /= 6;
  }

  // Convert to HSL format and return
  h = Math.round(h * 360);
  s = Math.round(s * 100);
  l = Math.round(l * 100);

  return { h, s, l };
}
