const { join } = require('path')
const nest = require('depnest')

const script = join(__dirname, '../../bin.js')

module.exports = {
  gives: nest('cli.command'),
  create: () => nest('cli.command', () => ({
    name: 'dev',
    options: [{}],
    command: (args) => {
      const dev = require('node-dev')

      const scriptArgs = process.argv.slice(3)
      process.env.NODE_ENV = 'development'
      dev(script, scriptArgs, [], {
        deps: true,
        notify: true
      })
    }
  }))
}
