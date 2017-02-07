const pipe = require('value-pipe')

const pathModule = require('../lib/pathModule')
const Module = require('../lib/module')

module.exports = {
  transform: pipe(
    pathModule,
    Module
  ),
  glob: '**/modules/*.js'
}
