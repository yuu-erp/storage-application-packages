import { input, select } from '@inquirer/prompts'
import { Command } from 'commander'
import { LIST_ENVIRONMENT, LIST_PROJECT } from '../constant'
import { isValidFolderName } from '../utils/validators'

export default (program: Command) => {
  return program
    .command('create')
    .description('Create a new Metanode project.')
    .action(async () => {
      try {
        const projectType = await select({
          message: 'Please select the type of project you want to create:',
          choices: LIST_PROJECT
        })
        let projectName
        while (true) {
          projectName = await input({
            message: 'What is the name of the project?'
          })

          if (!isValidFolderName(projectName)) {
            console.error('❌ Tên dự án không hợp lệ! Vui lòng thử lại.')
          } else {
            break
          }
        }
        const projectEnv = await select({
          message: 'Choose an additional environment file to include:',
          choices: LIST_ENVIRONMENT
        })
        let projectPort
        while (true) {
          projectPort = await input({
            message: 'Choose a port number for development server (default is 3000):',
            default: '3000'
          })

          const port = parseInt(projectPort, 10)
          if (isNaN(port) || port < 1 || port > 65535) {
            console.error('❌ Please enter a valid port number (1-65535).')
          } else {
            break
          }
        }
      } catch (error) {
        console.error('⚠️ Đã xảy ra lỗi:', error)
        process.exit(1)
      }
    })
}
