import { Command } from 'commander'

export default (program: Command) => {
  return program
    .command('build <project-name>')
    .description('Build a Metanode project.')
    .action(async (projectName: string) => {
      try {
        console.log('projectName: ', projectName)
      } catch (error: unknown) {
        console.error('⚠️ Đã xảy ra lỗi:', (error as Error).message)
        process.exit(1)
      }
    })
}
