const nest = require('depnest')

module.exports = {
  gives: nest('cli.command'),
  create: () => nest('cli.command', () => ({
    name: 'server',
    options: [{
      defaults: [{
        name: 'cwd',
        help: 'base directory from which the relative paths are resolved'
      }]
    }],
    command: (args) => {
      const startServer = require('../server')

      startServer(args)
    }
  }))
}
