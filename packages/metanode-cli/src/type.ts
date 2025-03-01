export enum EnumTypeEnv {
  TEST = 'test',
  DEV = 'dev',
  WORK = 'work',
  MAIN = 'main',
  ALL = 'all'
}

export enum ProjectType {
  REACT_VITE_TEMPLATE = 'REACT_VITE_TEMPLATE',
  VANILLA_VITE_TEMPLATE = 'VANILLA_VITE_TEMPLATE',
  NEXT_JS = 'NEXT_JS',
  REMIX = 'REMIX'
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
