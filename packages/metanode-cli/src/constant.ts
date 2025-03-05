import { Separator } from '@inquirer/prompts'
import { EnumTypeEnv, ENVS, FolderApps, ProjectType } from './type'

export const LIST_ENVIRONMENT: ENVS[] = [
  {
    name: 'None (Only .env)',
    value: EnumTypeEnv.MAIN,
    description: 'Use only the default .env file, without additional environment configurations.'
  },
  {
    name: 'Test (.env.test)',
    value: EnumTypeEnv.TEST,
    description: 'Includes a separate .env.test file for testing environments.'
  },
  {
    name: 'Development (.env.dev)',
    value: EnumTypeEnv.DEV,
    description: 'Adds a .env.dev file for development-specific configurations.'
  },
  {
    name: 'Worknet (.env.worknet)',
    value: EnumTypeEnv.WORK,
    description: 'Provides a .env.worknet file, useful for custom work network setups.'
  },
  {
    name: 'Add all (.env, .env.test, .env.dev, .env.worknet)',
    value: EnumTypeEnv.ALL,
    description: 'Includes all environment files: .env, .env.test, .env.dev, and .env.worknet.'
  }
]

export const LIST_PROJECT = [
  {
    name: 'ReactJs Vite',
    value: ProjectType.REACT_VITE_TEMPLATE,
    description:
      'Ideal for creating a project. Best suited for interactive user interfaces and component-based architectures.'
  },
  new Separator(),
  {
    name: 'Vanilla Vite',
    value: ProjectType.VANILLA_VITE_TEMPLATE,
    disabled: true,
    description:
      'A lightweight setup for building web applications without frameworks. Uses Vite for fast development and optimized builds.'
  },
  {
    name: 'NextJs',
    value: ProjectType.NEXT_JS,
    disabled: true,
    description:
      'Currently, the option to create projects using NextJs is disabled. Please check back later for updates.'
  },
  {
    name: 'Remix',
    value: ProjectType.REMIX,
    disabled: true,
    description:
      'Currently, it is not possible to create projects using Remix. Stay tuned for future improvements.'
  }
]

export const FolderDescriptions: Record<FolderApps, string> = {
  [FolderApps.METANODE_APPS]:
    'Ideal for creating a project. Best suited for interactive user interfaces and component-based architectures.',
  [FolderApps.METANODE_NATIVES]:
    'Designed for native applications, suitable for mobile or cross-platform development.',
  [FolderApps.METANODE_WEBS]:
    'Optimized for web-based applications, ensuring seamless performance and scalability.'
}

export const KEY_WORKSPACE_NAME = '__project_name__'
