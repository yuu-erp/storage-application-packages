import { isHex } from "../validators";

describe("isHex - Kiểm tra chuỗi có phải là hex hợp lệ hay không", () => {
  test("Chuỗi hex hợp lệ với độ dài chẵn", () => {
    expect(isHex("a1b2c3")).toBe(true);
    expect(isHex("ABCDEF123456")).toBe(true);
    expect(isHex("00ff00")).toBe(true);
    expect(isHex("deadbeef")).toBe(true);
  });

  test("Chuỗi có độ dài lẻ", () => {
    expect(isHex("a1b2c")).toBe(false);
    expect(isHex("12345")).toBe(false);
  });

  test("Chuỗi chứa ký tự không hợp lệ", () => {
    expect(isHex("xyz123")).toBe(false); // Chứa ký tự không phải hex
    expect(isHex("GHIJKL")).toBe(false); // Chứa chữ cái ngoài phạm vi a-f/A-F
    expect(isHex("123@!")).toBe(false); // Chứa ký tự đặc biệt
  });

  test("Chuỗi rỗng", () => {
    expect(isHex("")).toBe(false);
  });

  test("Giá trị không phải chuỗi", () => {
    expect(isHex(123456 as any)).toBe(false);
    expect(isHex(null as any)).toBe(false);
    expect(isHex(undefined as any)).toBe(false);
    expect(isHex({} as any)).toBe(false);
    expect(isHex([] as any)).toBe(false);
  });
});
