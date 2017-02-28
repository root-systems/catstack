const nest = require('depnest')
const parseArgs = require('minimist')
const formatArgs = require('dargs')
const pkgConf = require('pkg-conf')

module.exports = {
  gives: nest('config', [
    'cwd',
    'args'
  ]),
  create: () => {
    return nest('config', {
      cwd,
      args
    })

    function args () {
      const packageOpts = pkgConf.sync('catstack')
      const packageArgs = formatArgs(packageOpts)
      const cliArgs = process.argv.slice(2)
      return cliArgs.concat(packageArgs)
    }

    function cwd () {
      return parseArgs(args()).cwd
    }
  }
}
