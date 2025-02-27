import fs from 'fs'
import { Command } from 'commander'
import { handlePath } from './utils'

const program = new Command()

program.name('MetaNode').description('CLI for dapp repository utility').version('1.0.0')

const commandFiles = fs
  .readdirSync(handlePath('./commands', __dirname))
  .filter((file) => file.endsWith('.ts'))

for (const file of commandFiles) {
  const { default: command } = require(handlePath(`./commands/${file}`, __dirname))
  console.log('command: ', command)
  command(program)
}

program.parse()
