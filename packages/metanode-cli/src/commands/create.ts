import { input, select } from '@inquirer/prompts'
import { Command } from 'commander'
import fs from 'fs'
import { LIST_ENVIRONMENT, LIST_PROJECT } from '../constant'
import { EnumTypeEnv, FolderApps } from '../type'
import { copyTemplate, createDirectory, handlePath, updateFileContent } from '../utils'
import { promptFolderType } from '../utils/promptFolderType'
import { Variable } from '../utils/replaceTemplate'
import { isValidFolderName } from '../utils/validators'

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

const updateWorkspaceName = (
  projectDirectory: string,
  folderType: FolderApps,
  projectName: string
) => {
  const variables: Variable[] = [
    {
      replacer: '"name": ".*?"',
      value: `"name": "@${folderType.replace('-', '')}/${projectName
        .toLowerCase()
        .replace(/[^a-z0-9]/g, '')}"`
    }
  ]
  updateFileContent(`${projectDirectory}/package.json`, variables)
}

const createEnvironmentVariable = (projectEnv: EnumTypeEnv, projectDirectory: string) => {
  const envFiles: Record<EnumTypeEnv, Record<string, string>> = {
    [EnumTypeEnv.TEST]: { '.env.testnet': `NODE_ENV=test\n` },
    [EnumTypeEnv.DEV]: { '.env.devnet': `NODE_ENV=development\n` },
    [EnumTypeEnv.WORK]: { '.env.worknet': `NODE_ENV=staging\n` },
    [EnumTypeEnv.MAIN]: {
      '.env': `NODE_ENV=production\n`
    },
    [EnumTypeEnv.ALL]: {
      '.env': `NODE_ENV=production\n`,
      '.env.testnet': `NODE_ENV=test\n`,
      '.env.devnet': `NODE_ENV=development\n`,
      '.env.worknet': `NODE_ENV=staging\n`
    }
  }

  const envConfig = envFiles[projectEnv] || {}

  Object.entries(envConfig).forEach(([fileName, content]) => {
    const filePath = `${projectDirectory}/${fileName}`
    try {
      fs.writeFileSync(handlePath(filePath), content)
      console.log(`✅ File ${fileName} đã được tạo tại: ${filePath}`)
    } catch (error) {
      console.error(`❌ Lỗi khi tạo file ${fileName}:`, (error as Error).message)
    }
  })
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
        const projectDirectory = `../../../apps/${folderType}/${projectName}/`
        createDirectory(projectDirectory)
        copyTemplate(projectType, projectDirectory)
        updateWorkspaceName(projectDirectory, folderType, projectName)
        createEnvironmentVariable(projectEnv, projectDirectory)
      } catch (error: unknown) {
        console.error('⚠️ Đã xảy ra lỗi:', (error as Error).message)
        process.exit(1)
      }
    })
}
