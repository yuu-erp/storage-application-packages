import path from 'path'

/**
 * Tạo đường dẫn tuyệt đối từ filePath và basePath.
 * @param filePath Đường dẫn file cần xử lý.
 * @param basePath Thư mục gốc (mặc định là thư mục `src` trong project).
 * @returns Đường dẫn tuyệt đối.
 */
export const handlePath = (filePath: string, basePath = path.resolve('src')): string =>
  path.resolve(basePath, filePath)
