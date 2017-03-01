const nest = require('depnest')
const envToObj = require('env-to-obj')
const parseArgv = require('minimist')
const pkgConf = require('pkg-conf')
const deepAssign = require('deep-assign')

module.exports = {
  gives: nest('config', [
    'env',
    'argv',
    'args',
    'pkg',
    'defaults',
    'all'
  ]),
  create: () => {
    var env, argv, args, pkg, all
    return nest('config', {
      env: getEnv,
      argv: getArgv,
      args: getArgs,
      pkg: getPkg,
      defaults,
      all: getAll
    })

    function getEnv () {
      if (!env) {
        env = envToObj(process.env)
      }
      return env
    }

    function getArgv () {
      if (!argv) argv = process.argv.slice(2)
      return argv
    }

    function getArgs () {
      if (!args) {
        args = parseArgv(getArgv())
        delete args._
      }
      return args
    }

    function getPkg () {
      if (!pkg) {
        pkg = pkgConf.sync('catstack', {
          cwd: getEnv().cwd
        })
      }
      return pkg
    }

    function defaults () {
      return {
        cwd: process.cwd(),
        port: 5000
      }
    }

    function getAll () {
      if (!all) {
        all = deepAssign(
          {},
          defaults(),
          getPkg(),
          getEnv(),
          getArgs()
        )
      }
      return all
    }
  }
}
