#!/usr/bin/env node

const subcommand = require('subcommand')
const cliopts = require('cliclopts')
const dargs = require('dargs')
const pkgConf = require('pkg-conf')
const setBlocking = require('set-blocking')
const fs = require('fs')
const Path = require('path')

// TODO get logger from depject modules
//const log = require('../log')

const pkgPath = Path.join(__dirname, '../package.json')
const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'))

const config = {
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
    }],
  },
  defaults: [{
    name: 'cwd',
    default: process.cwd(),
    help: 'base directory from which the relative paths are resolved'
  }],
  commands: [
    require('./server'),
    require('./dev'),
    require('./test')
  ],
  none: function noCommand (args) {
    if (!args.version) {
      usageAll()
    }
  },
  all: function allCommands (args) {
    // use setBlocking because of weirdness in node 6
    // where stdout might be cut off due to async
    // that doesn't play well with process.exit()
    setBlocking(true)
    var commandName = args._[0]
    var command = config.commands.find(function (command) {
      return command.name === commandName
    })
    if (args.version) {
      console.log(pkg.version)
    } else if (args.help) {
      if (command) {
        usageOne(command)
      } else {
        usageAll()
      }
    } else {
      // we want non-blocking stdout
      setBlocking(false)
      return
    }
    process.exit(0)
  }
}

const match = subcommand(config)

if (!module.parent) {
  const packageOpts = pkgConf.sync('catstack')
  const packageArgs = dargs(packageOpts)
  const cliArgs = process.argv.slice(2)
  const args = cliArgs.concat(packageArgs)

  match(args)
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
  console.log('Usage: catstack '+command.name+' [options]')
  console.log('  catstack '+command.name)
  cliopts(command.options).print()
}
