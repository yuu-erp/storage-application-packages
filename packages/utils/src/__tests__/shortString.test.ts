import { shortString } from "../formats";

describe('shortString - Rút gọn chuỗi với dấu "..." ở giữa', () => {
  test("Chuỗi ngắn hơn hoặc bằng độ dài giới hạn không thay đổi", () => {
    expect(shortString("hello", 6)).toBe("hello");
    expect(shortString("short", 5)).toBe("sh...rt");
  });

  test("Chuỗi dài hơn độ dài giới hạn sẽ bị rút gọn", () => {
    expect(shortString("abcdefghij", 6)).toBe("abc...hij");
    expect(shortString("longtextsample", 8)).toBe("long...mple");
  });

  test("Chuỗi có độ dài lẻ vẫn được xử lý đúng", () => {
    expect(shortString("abcdefg", 7)).toBe("abc...efg");
  });

  test("Chuỗi rỗng trả về rỗng", () => {
    expect(shortString("", 6)).toBe("");
  });

  test("Độ dài giới hạn là 1 vẫn hoạt động", () => {
    expect(shortString("abcdef", 1)).toBe("...abcdef");
  });

  test("Độ dài giới hạn bằng 0 hoặc nhỏ hơn", () => {
    expect(shortString("abcdef", 0)).toBe("...abcdef");
    expect(shortString("abcdef", -1)).toBe("abcde...bcdef");
  });

  test("Độ dài giới hạn lớn hơn chiều dài chuỗi", () => {
    expect(shortString("abcdef", 10)).toBe("abcdef");
  });
});
