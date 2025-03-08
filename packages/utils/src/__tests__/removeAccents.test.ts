import { removeAccents } from "../formats";

describe("removeAccents - Kiểm tra hàm loại bỏ dấu tiếng Việt", () => {
  it("Loại bỏ dấu trong chuỗi có ký tự tiếng Việt", () => {
    expect(removeAccents("Hòa Bình")).toBe("Hoa Binh");
    expect(removeAccents("Công nghệ")).toBe("Cong nghe");
    expect(removeAccents("điện thoại")).toBe("dien thoai");
    expect(removeAccents("Thể thao")).toBe("The thao");
  });

  it("Giữ nguyên chuỗi không có dấu", () => {
    expect(removeAccents("Hello")).toBe("Hello");
    expect(removeAccents("123456")).toBe("123456");
    expect(removeAccents("!@#$%^&*()")).toBe("!@#$%^&*()");
  });

  it("Trả về chuỗi rỗng nếu đầu vào là rỗng", () => {
    expect(removeAccents("")).toBe("");
  });

  it("Xử lý chính xác chuỗi chỉ chứa ký tự có dấu", () => {
    expect(removeAccents("ắặâầểễếệ")).toBe("aaaaeeee");
    expect(removeAccents("ỳỷỹýỵ")).toBe("yyyyy");
  });
});
