import { isValidAddress } from "../validators";

describe("isValidAddress - Xác thực địa chỉ", () => {
  test("Hợp lệ", () => {
    expect(isValidAddress("0x67f7436714097b96f27e8eae442a889e1de0d131")).toBe(
      true,
    );
    expect(isValidAddress("0x52908400098527886E0F7030069857D2E4169EE7")).toBe(
      true,
    );
    expect(isValidAddress("0xde709f2102306220921060314715629080e2fb77")).toBe(
      true,
    );
  });

  test("Không hợp lệ", () => {
    expect(isValidAddress("0xINVALIDADDRESS1234567890")).toBe(false); // Ký tự ngoài phạm vi a-f, A-F, 0-9
    expect(isValidAddress("0x742d35Cc6634C0532925a3b844Bc454e4438f44")).toBe(
      false,
    ); // Chỉ có 39 ký tự
    expect(isValidAddress("742d35Cc6634C0532925a3b844Bc454e4438f44e")).toBe(
      false,
    );
    expect(isValidAddress("")).toBe(false);
    expect(isValidAddress("0x123")).toBe(false);
  });
});
