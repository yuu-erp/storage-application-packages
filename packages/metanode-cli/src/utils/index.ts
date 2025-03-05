import path from 'path'
import fs from 'fs'
import fsExtra from 'fs-extra'
import { replaceTemplate, Variable } from './replaceTemplate'
import { PackageManager } from '../type'

/**
 * Chuyển đổi đường dẫn tương đối thành đường dẫn tuyệt đối.
 * @param filePath - Đường dẫn tương đối cần xử lý.
 * @param basePath - Thư mục gốc (mặc định là thư mục `src` trong project).
 * @returns Đường dẫn tuyệt đối.
 */
export const handlePath = (filePath: string, basePath = path.resolve('src')): string =>
  path.resolve(basePath, filePath)

/**
 * Tạo thư mục nếu chưa tồn tại.
 * @param dirPath - Đường dẫn thư mục cần tạo.
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

/**
 * Sao chép template từ thư mục nguồn sang thư mục đích.
 * @param source - Tên thư mục template trong `templates/`.
 * @param destination - Đường dẫn thư mục đích.
 * @throws Nếu thư mục nguồn không tồn tại hoặc có lỗi trong quá trình sao chép.
 */
export const copyTemplate = (source: string, destination: string) => {
  try {
    const srcPath = handlePath(`templates/${source}`, path.resolve(__dirname, '../'))
    const destinationPath = handlePath(destination)
    if (!fs.existsSync(srcPath)) {
      throw new Error(`Source path does not exist: ${source}`)
    }
    fsExtra.copySync(srcPath, destinationPath, { overwrite: true }) // Sao chép thư mục và file
    console.log(`✅ Đã sao chép template từ ${source} sang ${destination}`)
  } catch (error) {
    throw new Error(`Không thể sao chép template: ${(error as Error).message}`)
  }
}

/**
 * Cập nhật nội dung file bằng cách thay thế các biến trong template.
 * @param filePath - Đường dẫn tới file cần cập nhật.
 * @param variables - Danh sách các biến cần thay thế trong file.
 */
export const updateFileContent = (filePath: string, variables: Variable[]) => {
  const filePathsrc = handlePath(filePath)
  if (!fs.existsSync(filePathsrc)) {
    throw new Error(`File không tồn tại: ${filePathsrc}`)
  }
  const fileContent = fs.readFileSync(filePathsrc, 'utf8')
  const updatedContent = replaceTemplate(fileContent, variables)
  fs.writeFileSync(filePathsrc, updatedContent, 'utf8')
  console.log(`✅ Nội dung file đã được cập nhật: ${filePath}`)
}

/**
 * Xác định trình quản lý package hiện tại bằng cách kiểm tra biến môi trường.
 * @returns {PackageManager} - Trả về trình quản lý package hiện tại (yarn, pnpm, npm).
 */
export const getPackageManager = (): PackageManager => {
  if (process.env.npm_execpath?.includes(PackageManager.YARN)) return PackageManager.YARN
  if (process.env.npm_execpath?.includes(PackageManager.PNPM)) return PackageManager.PNPM
  return PackageManager.NPM
}
