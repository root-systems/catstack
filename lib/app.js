const combine = require('depject')
const bulk = require('bulk-require')

const mapModules = require('./mapModules')
const tranformModule = require('./transformModule')

const types = require('../types')
const coreModules = require('../modules')

module.exports = setupApp

function setupApp ({ dirname } = {}) {
  const appExports = bulk(dirname || process.cwd(), ['**/*.js'], { process })
  const appModules = mapModules(appExports, tranformModule(types))

  return combine(
    appModules,
    coreModules
  )
}
