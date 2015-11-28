const serveStatic = require('serve-static')
const { join } = require('path')

module.exports = createStaticService

function createStaticService (config) {
  return serveStatic(config.root, config)
}
