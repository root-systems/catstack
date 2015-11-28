const serveStatic = require('serve-static')
const { join } = require('path')

module.exports = createStatic

function createStatic (config) {
  return serveStatic(config.root, config)
}
