import { formatAddress } from "../formats";

describe("formatAddress - Định dạng địa chỉ", () => {
  test("Định dạng địa chỉ", () => {
    expect(formatAddress("0x295ebd481ad46f96ccae4bfa0ed5c6d74c321032")).toBe(
      "0x295ebd481ad46f96ccae4bfa0ed5c6d74c321032",
    );
  });
});
