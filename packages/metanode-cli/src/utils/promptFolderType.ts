import fs from 'fs'
import { handlePath } from '.'
import { FolderApps } from '../type'
import { FolderDescriptions } from '../constant'
import { select } from '@inquirer/prompts'

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

export const promptFolderType = async () => {
  return await select({
    message: 'Please select the type of project you want to create:',
    choices: getFolderChildApps('../../../apps')
  })
}
