const combine = require('depject')
const prioritize = require('depject-priority')

const configModule = require('./config')
const appModules = require('./lib/app')
const coreModules = require('./modules')

module.exports = startServer

function startServer ({ cwd } = {}) {
  const sockets = combine(prioritize(
    configModule,
    appModules({ cwd }),
    coreModules
  ))
  sockets.server.start.map(s => s())
}
