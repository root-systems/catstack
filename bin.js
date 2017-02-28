#!/usr/bin/env node

const combine = require('depject')
const entry = require('depject/entry')

const configModule = require('./config')
const coreModules = require('./modules')

const sockets = combine(
  configModule,
  coreModules
  // TODO app and config modules...
)

const api = entry(sockets, {
  cli: { export: 'first' }
})

const cli = api.cli.export

cli()
