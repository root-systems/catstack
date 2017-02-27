#!/usr/bin/env node

module.exports = {
  name: 'server',
  options: [{}],
  command: (args) => {
    const startServer = require('../server/start')

    startServer(args)
  }
}
