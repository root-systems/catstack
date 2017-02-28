const fs = require('fs')
const Path = require('path')
const nest = require('depnest')
const subcommand = require('subcommand')
const cliopts = require('cliclopts')

module.exports = {
  gives: nest('cli.export'),
  needs: nest({
    'config.args': 'first',
    log: {
      info: 'first'
    },
    'cli.command': 'map'
  }),
  create: (api) => {
    var config
    var match

    return nest('cli.export', () => {
      const args = api.config.args()
      const config = getConfig()
      if (!match) match = subcommand(config)
      return match(args)
    })

    function getConfig () {
      if (!config) {
        config = {
          root: {
            options: [{
              name: 'version',
              boolean: true,
              abbr: 'v',
              help: 'print version'
            }, {
              name: 'help',
              boolean: true,
              abbr: 'h',
              help: 'print help'
            }]
          },
          defaults: [{
            name: 'cwd',
            default: process.cwd(),
            help: 'base directory from which the relative paths are resolved'
          }],
          commands: api.cli.command(),
          none: function noCommand (args) {
            if (!args.version && !args.help) {
              usageAll()
            }
          },
          all: function allCommands (args) {
            var commandName = args._[0]
            var command = config.commands.find(function (command) {
              return command.name === commandName
            })
            if (args.version) {
              const pkgPath = Path.join(__dirname, '../package.json')
              const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'))
              console.log(pkg.version)
            } else if (args.help) {
              if (command) {
                usageOne(command)
              } else {
                usageAll()
              }
            }
          }
        }
      }
      return config
    }

    function usageAll () {
      console.log('Usage: catstack <subcommand> [options]')
      console.log('  catstack')
      cliopts(config.root.options).print()
      config.commands.forEach(function (sub) {
        console.log('  catstack ' + sub.name)
        cliopts(sub.options).print()
      })
    }

    function usageOne (command) {
      console.log('Usage: catstack ' + command.name + ' [options]')
      console.log('  catstack ' + command.name)
      cliopts(command.options).print()
    }
  }
}
