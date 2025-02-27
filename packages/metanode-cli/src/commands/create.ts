import { input, select } from '@inquirer/prompts'
import { Command } from 'commander'
import { LIST_ENVIRONMENT, LIST_PROJECT } from '../constant'

export default (program: Command) => {
  return program
    .command('create')
    .description('Create a new Metanode project.')
    .action(async () => {
      const projectType = await select({
        message: 'Please select the type of project you want to create:',
        choices: LIST_PROJECT
      })
      const projectName = await input({
        message: 'What is the name of the project?'
      })
      const projectEnv = await select({
        message: 'Choose an additional environment file to include:',
        choices: LIST_ENVIRONMENT
      })
      const projectPort = await input({
        message: 'Choose a port number for development server (default is 3000):',
        default: '3000',
        validate: (input) => {
          const port = parseInt(input, 10)
          if (isNaN(port) || port < 1 || port > 65535) {
            return 'Please enter a valid port number (1-65535).'
          }
          return true
        }
      })

      const projectDirectory = `../apps/${projectName}/`
      console.log('projectDirectory: ', projectDirectory)
    })
}
