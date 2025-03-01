import { handlePath } from '.'
import fs from 'fs'
import { FolderApps } from '../type'

const FolderDescriptions: Record<FolderApps, string> = {
  [FolderApps.METANODE_APPS]:
    'Ideal for creating a project. Best suited for interactive user interfaces and component-based architectures.',
  [FolderApps.METANODE_NATIVES]:
    'Designed for native applications, suitable for mobile or cross-platform development.',
  [FolderApps.METANODE_WEBS]:
    'Optimized for web-based applications, ensuring seamless performance and scalability.'
}

export function getFolderChildApps(path: string) {
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
