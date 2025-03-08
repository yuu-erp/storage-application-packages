import { debounce } from "../handle";

describe("Hàm debounce - Trì hoãn thực thi hàm", () => {
  beforeEach(() => {
    jest.useFakeTimers(); // Kích hoạt fake timers trước mỗi test
  });

  afterEach(() => {
    jest.clearAllTimers(); // Xóa hết timer sau mỗi test để tránh ảnh hưởng test khác
  });

  test("Hàm được gọi sau khoảng thời gian chờ", () => {
    const mockFn = jest.fn();
    const debouncedFn = debounce(mockFn, 500);

    debouncedFn();
    expect(mockFn).not.toHaveBeenCalled();

    jest.advanceTimersByTime(500);
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  test("Hủy gọi nếu tiếp tục gọi trong khoảng thời gian chờ", () => {
    const mockFn = jest.fn();
    const debouncedFn = debounce(mockFn, 500);

    debouncedFn();
    jest.advanceTimersByTime(300); // Gọi lại trước khi hết 500ms
    debouncedFn();

    jest.advanceTimersByTime(300);
    expect(mockFn).not.toHaveBeenCalled(); // Chưa đủ 500ms nên chưa gọi

    jest.advanceTimersByTime(200); // Tổng đủ 500ms từ lần gọi cuối
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  test("Truyền đúng tham số cho hàm được debounce", () => {
    const mockFn = jest.fn();
    const debouncedFn = debounce(mockFn, 300);

    debouncedFn("Hello", 123);
    jest.advanceTimersByTime(300);

    expect(mockFn).toHaveBeenCalledWith("Hello", 123);
  });

  test("Hàm debounce không bị gọi lại nếu không có lần gọi mới", () => {
    const mockFn = jest.fn();
    const debouncedFn = debounce(mockFn, 400);

    debouncedFn();
    jest.advanceTimersByTime(400);
    expect(mockFn).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(400);
    expect(mockFn).toHaveBeenCalledTimes(1); // Không có lần gọi mới nên không tăng số lần gọi
  });
});
