const { assign } = Object
const nest = require('depnest')

module.exports = {
  gives: nest('cli.command'),
  needs: nest('config.all', 'first'),
  create: (api) => nest('cli.command', () => ({
    name: 'lint',
    options: [{
      name: 'fix',
      boolean: true,
      help: 'automatically fix problems'
    }, {
      name: 'verbose',
      boolean: true,
      help: 'show rule names for errors (to ignore specific rules)'
    }],
    command: (args) => {
      const lintOptions = require('standard/options')
      const lint = require('standard-engine').cli

      const { cwd } = api.config.all()
      process.argv.splice(2, 1)
      lint(assign({ cwd }, lintOptions))
    }
  }))
}
