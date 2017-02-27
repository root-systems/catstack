#!/usr/bin/env node

module.exports = {
  name: 'server',
  options: [{}],
  command: (args) => {
    const server = require('../server')

    server(args)
  }
}
