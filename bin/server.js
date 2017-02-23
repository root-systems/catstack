#!/usr/bin/env node

const server = require('../server')

module.exports = {
  name: 'server',
  options: [{}],
  command: function ({ cwd }) {
    console.log('cwd', cwd)
    server({ cwd })
  }
}
