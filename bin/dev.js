#!/usr/bin/env node

const { join } = require('path')

const script = join(__dirname, './index.js')

module.exports = {
  name: 'dev',
  options: [{}],
  command: (args) => {
    const dev = require('node-dev')

    const scriptArgs = process.argv.slice(3)
    process.env.NODE_ENV = 'development'
    dev(script, scriptArgs, [], {
      deps: true,
      notify: true
    })
  }
}
