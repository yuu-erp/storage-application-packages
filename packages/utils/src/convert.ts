/**
 * Chuyển đổi một tệp (File) thành chuỗi Base64.
 *
 * - Kiểm tra xem trình duyệt có hỗ trợ FileReader không.
 * - Đọc nội dung của tệp và chuyển đổi thành chuỗi Base64.
 * - Trả về một Promise chứa chuỗi Base64 của tệp.
 * - Nếu xảy ra lỗi trong quá trình đọc, Promise sẽ bị reject.
 *
 * @param file - Đối tượng File cần chuyển đổi.
 * @returns Một Promise trả về chuỗi Base64 của tệp.
 * @throws Lỗi nếu trình duyệt không hỗ trợ FileReader hoặc tệp không hợp lệ.
 */
export const convertFileToBase64 = (file: File): Promise<string> => {
  if (!("FileReader" in window)) {
    throw new Error("FileReader is not supported by this browser.");
  }

  if (!(file instanceof File)) {
    throw new Error("The provided input is not a valid File object.");
  }

  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.result) {
        resolve(reader.result as string);
      } else {
        reject(new Error("FileReader did not return a result."));
      }
    };

    reader.onerror = () => reject(new Error("Error reading file"));

    try {
      reader.readAsDataURL(file);
    } catch (err) {
      reject(new Error("Failed to read the file: " + (err as Error).message));
    }
  });
};

/**
 * Chuyển đổi một chuỗi Base64 thành đối tượng File.
 *
 * - Giải mã chuỗi Base64 thành dữ liệu nhị phân.
 * - Chuyển dữ liệu nhị phân thành một Uint8Array.
 * - Tạo và trả về một đối tượng File từ dữ liệu đã giải mã.
 *
 * @param base64String - Chuỗi Base64 chứa dữ liệu của tệp.
 * @param fileName - Tên tệp mong muốn khi tạo File.
 * @param fileType - Loại MIME của tệp (ví dụ: 'image/png', 'application/pdf').
 * @returns Đối tượng File được tạo từ chuỗi Base64.
 */
export const convertBase64ToFile = (
  base64String: string,
  fileName: string,
  fileType: string
): File => {
  const base64Data = base64String.split(",")[1];
  if (!base64Data) {
    throw new Error("Invalid Base64 string: missing data part");
  }

  const byteString = atob(base64Data);
  const byteArray = new Uint8Array(
    Array.from(byteString, (char) => char.charCodeAt(0))
  );

  return new File([byteArray], fileName, { type: fileType });
};
