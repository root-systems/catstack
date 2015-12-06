const createStack = require('app/stack')

module.exports = createServer

function createServer (config) {
  const server = createStack(config)

  server.listen(config.port)

  return server
}
