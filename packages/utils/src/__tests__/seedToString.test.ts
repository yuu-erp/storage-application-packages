import { SEED_SECRECT, seedToString } from "../formats";

describe("Hàm seedToString", () => {
  test("Trả về lỗi nếu danh sách không có đúng 24 phần tử", () => {
    expect(() => seedToString([])).toThrow("Invalid list seed");
    expect(() => seedToString(["word"])).toThrow("Invalid list seed");
    expect(() => seedToString(Array(23).fill("test"))).toThrow(
      "Invalid list seed",
    );
    expect(() => seedToString(Array(25).fill("test"))).toThrow(
      "Invalid list seed",
    );
  });

  test("Chuyển đổi danh sách 24 chuỗi đúng định dạng", () => {
    const input = Array(24).fill("a"); // Danh sách 24 chuỗi có độ dài 1
    const output = `${SEED_SECRECT}${input.map((word) => `A${word}`).join("")}`;
    expect(seedToString(input)).toBe(output);
  });

  test("Xử lý danh sách có độ dài khác nhau", () => {
    const input = [
      "a",
      "bb",
      "ccc",
      "dddd",
      "eeeee",
      "ffffff",
      "ggggggg",
      "hhhhhhhh",
      "iiiiiiiii",
      "jjjjjjjjjj",
      "kkkkkkkkkkk",
      "llllllllllll",
      "mmmmmmmmmmmmm",
      "nnnnnnnnnnnnnn",
      "ooooooooooooooo",
      "pppppppppppppppp",
      "qqqqqqqqqqqqqqqqq",
      "rrrrrrrrrrrrrrrrrr",
      "sssssssssssssssssss",
      "tttttttttttttttttttt",
      "uuuuuuuuuuuuuuuuuuuuu",
      "vvvvvvvvvvvvvvvvvvvvvvvv",
      "www",
      "xxxx",
    ]; // Đủ 24 phần tử
    const expectedPrefix = `${SEED_SECRECT}`;
    const expectedSuffix =
      "AaBbbCcccDddddEeeeeeFffffffGgggggggHhhhhhhhhIiiiiiiiiiJjjjjjjjjjjKkkkkkkkkkkkLllllllllllllMmmmmmmmmmmmmmNnnnnnnnnnnnnnnOoooooooooooooooPppppppppppppppppQqqqqqqqqqqqqqqqqqRrrrrrrrrrrrrrrrrrrSsssssssssssssssssssTttttttttttttttttttttUuuuuuuuuuuuuuuuuuuuuuXvvvvvvvvvvvvvvvvvvvvvvvvCwwwDxxxx";
    expect(seedToString(input)).toBe(expectedPrefix + expectedSuffix);
  });
});
