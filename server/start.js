const app = require('../lib/app')

module.exports = startServer

function startServer ({ cwd } = {}) {
  const sockets = app({ cwd })
  sockets.server.start.map(s => s())
}
