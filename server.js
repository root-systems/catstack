const combine = require('depject')

const configModule = require('./config')
const appModules = require('./lib/app')
const coreModules = require('./modules')

module.exports = startServer

function startServer ({ cwd } = {}) {
  const sockets = combine(
    configModule,
    appModules({ cwd }),
    coreModules
  )
  sockets.server.start.map(s => s())
}
