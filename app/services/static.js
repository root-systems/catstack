const serveStatic = require('serve-static')

module.exports = createStaticService

function createStaticService (config) {
  return serveStatic(config.root, config)
}
