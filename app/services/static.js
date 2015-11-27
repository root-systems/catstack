const serveStatic = require('serve-static')

function createStaticService (config) {
  return serveStatic(config.root, config)
}
