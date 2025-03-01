export enum EnumTypeEnv {
  TEST = 'test',
  DEV = 'dev',
  WORK = 'work',
  MAIN = 'main',
  ALL = 'all'
}

export enum ProjectType {
  REACT_VITE = 'reactjs-vite',
  VANILLA_VITE = 'vanilla-vite',
  NEXT_JS = 'nextjs',
  REMIX = 'remix'
}

export enum FolderApps {
  METANODE_APPS = 'metanode-apps',
  METANODE_NATIVES = 'metanode-natives',
  METANODE_WEBS = 'metanode-webs'
}

export type ENVS = {
  name: string
  value: EnumTypeEnv
  description: string
}
