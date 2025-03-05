import path from 'path'
import fs from 'fs'
import fsExtra from 'fs-extra'

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

export const copyTemplate = async (source: string, destination: string) => {
  try {
    console.log('copyTemplate - source: ', source)
    console.log('copyTemplate - destination: ', destination)
    // await fsExtra.copy(source, destination, { overwrite: true }) // Sao chép thư mục và file
    // console.log(`✅ Đã sao chép template từ ${source} sang ${destination}`)
  } catch (error) {
    throw new Error(`Không thể sao chép template: ${(error as Error).message}`)
  }
}
