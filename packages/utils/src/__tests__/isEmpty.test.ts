import { isEmpty } from "../validators";

describe("isEmpty - Kiểm tra giá trị rỗng", () => {
  test("Các giá trị rỗng", () => {
    expect(isEmpty("")).toBe(true);
    expect(isEmpty([])).toBe(true);
    expect(isEmpty({})).toBe(true);
    expect(isEmpty(0)).toBe(true);
    expect(isEmpty(false)).toBe(true);
  });

  test("Các giá trị không rỗng", () => {
    expect(isEmpty("Hello")).toBe(false);
    expect(isEmpty([1, 2, 3])).toBe(false);
    expect(isEmpty({ key: "value" })).toBe(false);
    expect(isEmpty(42)).toBe(false);
    expect(isEmpty(true)).toBe(false);
  });
});
