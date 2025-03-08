import { handleMessageError } from "../handle";

describe("Hàm handleMessageError - Xử lý thông điệp lỗi", () => {
  test("Trả về lỗi nếu là chuỗi", () => {
    expect(handleMessageError("Lỗi kết nối")).toBe("Lỗi kết nối");
    expect(handleMessageError("Không tìm thấy dữ liệu")).toBe(
      "Không tìm thấy dữ liệu",
    );
  });

  test("Lấy lỗi từ error.data.description", () => {
    expect(handleMessageError({ data: { description: "Lỗi xác thực" } })).toBe(
      "Lỗi xác thực",
    );
    expect(
      handleMessageError({ data: { description: "Token không hợp lệ" } }),
    ).toBe("Token không hợp lệ");
  });

  test("Lấy lỗi từ error.response.data.message", () => {
    expect(
      handleMessageError({ response: { data: { message: "Lỗi hệ thống" } } }),
    ).toBe("Lỗi hệ thống");
    expect(
      handleMessageError({
        response: { data: { message: "Tài khoản bị khóa" } },
      }),
    ).toBe("Tài khoản bị khóa");
  });

  test("Lấy lỗi từ error.message", () => {
    expect(handleMessageError({ message: "Lỗi không xác định" })).toBe(
      "Lỗi không xác định",
    );
    expect(handleMessageError({ message: "Yêu cầu không hợp lệ" })).toBe(
      "Yêu cầu không hợp lệ",
    );
  });

  test("Trả về chuỗi JSON nếu không có thông điệp lỗi", () => {
    const errorObj = { code: 500, reason: "Server Error" };
    expect(handleMessageError(errorObj)).toBe(JSON.stringify(errorObj));

    const emptyError = {};
    expect(handleMessageError(emptyError)).toBe(JSON.stringify(emptyError));
  });

  test("Xử lý trường hợp đặc biệt", () => {
    expect(handleMessageError(null)).toBe("null");
    expect(handleMessageError(undefined)).toBe(undefined);
    expect(handleMessageError(404)).toBe("404"); // Số được chuyển thành chuỗi
  });
});
