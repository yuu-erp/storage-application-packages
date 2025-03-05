import path from 'path'
import fs from 'fs'

/**
 * Tạo đường dẫn tuyệt đối từ filePath và basePath.
 * @param filePath Đường dẫn file cần xử lý.
 * @param basePath Thư mục gốc (mặc định là thư mục `src` trong project).
 * @returns Đường dẫn tuyệt đối.
 */
export const handlePath = (filePath: string, basePath = path.resolve('src')): string =>
  path.resolve(basePath, filePath)

/**
 * Tạo thư mục nếu chưa tồn tại.
 * @param dirPath Đường dẫn thư mục cần tạo.
 */
export const createDirectory = (dirPath: string): void => {
  const absolutePath = handlePath(dirPath)

  if (!fs.existsSync(absolutePath)) {
    fs.mkdirSync(absolutePath, { recursive: true })
    console.log(`✅ Thư mục đã được tạo: ${absolutePath}`)
  } else {
    console.log(`⚠️ Thư mục đã tồn tại: ${absolutePath}`)
  }
}

// Hàm sao chép template
export const copyTemplate = async (source: string, destination: string) => {
  try {
    // Đảm bảo thư mục đích tồn tại
    await fs.promises.mkdir(destination, { recursive: true })

    // Đọc toàn bộ nội dung của thư mục nguồn
    const entries = await fs.promises.readdir(source, { withFileTypes: true })

    // Sao chép từng mục (file hoặc thư mục)
    for (const entry of entries) {
      const srcPath = path.join(source, entry.name)
      const destPath = path.join(destination, entry.name)

      if (entry.isDirectory()) {
        // Nếu là thư mục, đệ quy sao chép
        await copyTemplate(srcPath, destPath)
      } else {
        // Nếu là file, sao chép trực tiếp
        await fs.promises.copyFile(srcPath, destPath)
      }
    }
    console.log(`✅ Đã sao chép template từ ${source} sang ${destination}`)
  } catch (error) {
    throw new Error(`Không thể sao chép template: ${(error as Error).message}`)
  }
}
