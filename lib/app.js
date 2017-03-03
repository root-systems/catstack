const bulk = require('bulk-require')

const mapModules = require('./mapModules')
const tranformModule = require('./transformModule')
const types = require('../types')

module.exports = setupApp

function setupApp ({ cwd } = {}) {
  const appExports = bulk(cwd || process.cwd(), ['!(node_modules)/**/*.js'], { process })
  console.log('appExports', appExports)
  const appModules = mapModules(appExports, tranformModule(types))
  return appModules
}
