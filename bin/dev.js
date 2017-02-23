#!/usr/bin/env node

const { join } = require('path')
const dev = require('node-dev')

const script = join(__dirname, './index.js')

module.exports = {
  name: 'dev',
  options: [{}],
  command: (args) => {
    const scriptArgs = process.argv.slice(3)
    process.env.NODE_ENV = 'development'
    dev(script, scriptArgs, [], {
      deps: true,
      notify: true
    })
  }
}
