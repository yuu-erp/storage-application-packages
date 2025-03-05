import { execSync } from 'child_process'
import { Command } from 'commander'
import fs from 'fs'
import { getPackageManager, handlePath } from '../utils'
import { promptFolderType } from '../utils/promptFolderType'
import { select } from '@inquirer/prompts'

const promptSelectEnv = async (projectDirectory: string) => {
  const envFiles = fs.readdirSync(projectDirectory).filter((file) => file.startsWith('.env'))
  const envFileMap: { [key: string]: { name: string; value: string } } = {
    '.env': { name: 'Production', value: '' },
    '.env.testnet': { name: 'Testnet', value: 'testnet' },
    '.env.devnet': { name: 'Development', value: 'devnet' },
    '.env.worknet': { name: 'Worknet', value: 'worknet' }
  }

  const envChoices = envFiles
    .map((file) => envFileMap[file] || { name: file, value: file })
    .filter(Boolean)

  return await select({
    message: 'Please select the environment:',
    choices: envChoices
  })
}

export default (program: Command) => {
  return program
    .command('run <project-name>')
    .description('Run a Metanode project.')
    .action(async (projectName: string) => {
      try {
        const folderType = await promptFolderType()
        const projectDirectory = handlePath(`../../../apps/${folderType}/${projectName}/`)
        process.chdir(projectDirectory)
        console.log('📂 Project Directory:', projectDirectory)

        const packageManager = getPackageManager()
        console.log('📦 Package Manager:', packageManager)

        // Kiểm tra node_modules và cài đặt nếu cần
        if (!fs.existsSync('node_modules') || fs.readdirSync('node_modules').length === 0) {
          console.log('📦 Chưa cài đặt dependencies. Đang tiến hành cài đặt...')
          execSync(`${packageManager} install`, { stdio: 'inherit' })
        } else {
          console.log('✅ Dependencies đã được cài đặt.')
        }

        // Chọn environment
        const env = await promptSelectEnv(projectDirectory)
        console.log('🌍 Environment:', env)

        // Kiểm tra package.json để xác định cách chạy ứng dụng
        const packageJsonPath = `${projectDirectory}/package.json`
        if (!fs.existsSync(packageJsonPath)) {
          throw new Error('Không tìm thấy package.json trong thư mục dự án.')
        }

        const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'))
        const scripts = packageJson.scripts || {}

        // Lệnh chạy ứng dụng theo môi trường
        const envCommand = env ? `ENV=${env} ` : ''
        const startScript = scripts[`start:${env}`] || scripts.start || 'dev'

        console.log(
          `🚀 Đang khởi chạy ứng dụng với lệnh: ${envCommand}${packageManager} run ${startScript}`
        )
        execSync(`${envCommand}${packageManager} run ${startScript}`, { stdio: 'inherit' })
      } catch (error: unknown) {
        console.error('⚠️ Đã xảy ra lỗi:', (error as Error).message)
        process.exit(1)
      }
    })
}
