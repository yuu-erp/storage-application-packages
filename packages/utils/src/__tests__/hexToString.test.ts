import { hexToString } from "../handle";

describe("hexToString - Chuyển đổi chuỗi hex thành chuỗi ký tự", () => {
  test("Chuyển đổi chuỗi hex hợp lệ thành chuỗi ký tự", () => {
    expect(hexToString("48656c6c6f")).toBe("Hello"); // "Hello"
    expect(hexToString("576f726c64")).toBe("World"); // "World"
    expect(hexToString("5465737420313233")).toBe("Test 123"); // "Test 123"
  });

  test('Loại bỏ tiền tố "0x" nếu có', () => {
    expect(hexToString("0x48656c6c6f")).toBe("Hello");
  });

  test("Bỏ qua các ký tự không in được", () => {
    expect(hexToString("48656c6c6f00")).toBe("Hello"); // Ký tự NULL (00) bị bỏ qua
    expect(hexToString("48656c6c6f1f")).toBe("Hello"); // Ký tự điều khiển (1F) bị bỏ qua
  });

  test("Ném lỗi nếu chuỗi có độ dài lẻ", () => {
    expect(() => hexToString("123")).toThrow("Chuỗi hex không hợp lệ");
  });

  test("Ném lỗi nếu đầu vào không hợp lệ", () => {
    expect(() => hexToString("")).toThrow("Input phải là một chuỗi hex hợp lệ");
  });
});
