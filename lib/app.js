const combine = require('depject')
const bulk = require('bulk-require')
const nest = require('depnest')

const mapModules = require('./mapModules')
const tranformModule = require('./transformModule')

const types = require('../types')
const coreModules = require('../modules')

module.exports = setupApp

function setupApp ({ cwd } = {}) {
  const configModule = {
    gives: nest('config.cwd'),
    create: () => nest('config.cwd', () => cwd)
  }
  const appExports = bulk(cwd || process.cwd(), ['!(node_modules)/**/*.js'], { process })
  const appModules = mapModules(appExports, tranformModule(types))

  return combine(
    configModule,
    appModules,
    coreModules
  )
}
