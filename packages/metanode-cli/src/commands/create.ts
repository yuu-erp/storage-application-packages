import { input, select } from '@inquirer/prompts'
import { Command } from 'commander'
import fs from 'fs'
import { FolderDescriptions, LIST_ENVIRONMENT, LIST_PROJECT } from '../constant'
import { FolderApps, ProjectType } from '../type'
import { createDirectory, handlePath } from '../utils'
import { isValidFolderName } from '../utils/validators'

const getFolderChildApps = (path: string) => {
  return fs
    .readdirSync(handlePath(path), { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => {
      return {
        name: dirent.name,
        value: dirent.name as FolderApps,
        description: FolderDescriptions[dirent.name as FolderApps]
      }
    })
}

const promptFolderType = async () => {
  return await select({
    message: 'Please select the type of project you want to create:',
    choices: getFolderChildApps('../../../apps')
  })
}

const promptProjectType = async () => {
  return await select({
    message: 'Please select the type of project you want to create:',
    choices: LIST_PROJECT
  })
}

const promptProjectName = async () => {
  while (true) {
    const name = await input({ message: 'What is the name of the project?' })
    if (!isValidFolderName(name)) {
      console.error('❌ Tên dự án không hợp lệ! Vui lòng thử lại.')
    } else {
      return name
    }
  }
}

const promptProjectEnv = async () => {
  return await select({
    message: 'Choose an additional environment file to include:',
    choices: LIST_ENVIRONMENT
  })
}

const promptProjectPort = async () => {
  while (true) {
    const portInput = await input({
      message: 'Choose a port number for development server (default is 3000):',
      default: '3000'
    })

    const port = parseInt(portInput, 10)
    if (!isNaN(port) && port >= 1 && port <= 65535) {
      return port
    }
    console.error('❌ Please enter a valid port number (1-65535).')
  }
}

const getTemplateDirectory = (projectType: ProjectType) => {
  console.log(projectType)
}

export default (program: Command) => {
  return program
    .command('create')
    .description('Create a new Metanode project.')
    .action(async () => {
      try {
        const folderType = await promptFolderType()
        const projectType = await promptProjectType()
        const projectName = await promptProjectName()
        const projectEnv = await promptProjectEnv()
        const projectPort = await promptProjectPort()

        console.log({ folderType, projectType, projectName, projectEnv, projectPort })
        const projectDirectory = `../../../apps/${folderType}/${projectName}/`
        const templateDirectory = `./src/templates/${projectType}`
        createDirectory(projectDirectory)
      } catch (error: unknown) {
        console.error('⚠️ Đã xảy ra lỗi:', (error as Error).message)
        process.exit(1)
      }
    })
}
