const app = require('./lib/app')

module.exports = startServer

function startServer ({ cwd } = {}) {
  const sockets = app({ cwd })
  console.log(sockets)
  sockets.vas.start.map(s => s())
}
