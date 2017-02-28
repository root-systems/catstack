const nest = require('depnest')

module.exports = {
  gives: nest('cli.command'),
  create: () => nest('cli.command', () => ({
    name: 'server',
    options: [{}],
    command: (args) => {
      const startServer = require('../server')

      startServer(args)
    }
  }))
}
