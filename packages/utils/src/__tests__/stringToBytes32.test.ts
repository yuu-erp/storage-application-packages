import { stringToBytes32 } from "../handle";

describe("stringToBytes32 - Chuyển chuỗi thành định dạng bytes32", () => {
  test("Chuyển chuỗi ngắn thành bytes32", () => {
    expect(stringToBytes32("hello")).toBe(
      "0x68656c6c6f000000000000000000000000000000000000000000000000000000",
    );
  });

  test("Chuyển chuỗi có đúng 32 ký tự", () => {
    const input = "a".repeat(32); // Chuỗi 'aaaaaaaa...' (32 lần)
    const expected = `0x${"61".repeat(32)}`; // Mỗi 'a' = 0x61
    expect(stringToBytes32(input)).toBe(expected);
  });

  test("Chuỗi dài hơn 32 ký tự sẽ bị cắt ngắn", () => {
    const input = "abcdefghijklmnopqrstuvwxyz0123456789"; // 36 ký tự
    const expected = `0x${Buffer.from(input.slice(0, 32)).toString("hex")}`; // Chỉ lấy 32 ký tự đầu
    expect(stringToBytes32(input)).toBe(expected);
  });

  test("Chuyển chuỗi rỗng thành bytes32", () => {
    expect(stringToBytes32("")).toBe(
      "0x0000000000000000000000000000000000000000000000000000000000000000",
    );
  });

  test("Chuyển ký tự đặc biệt thành bytes32", () => {
    expect(stringToBytes32("!@#$%")).toBe(
      "0x2140232425000000000000000000000000000000000000000000000000000000",
    );
  });

  test("Chuyển số dưới dạng chuỗi thành bytes32", () => {
    expect(stringToBytes32("123456")).toBe(
      "0x3132333435360000000000000000000000000000000000000000000000000000",
    );
  });
});
