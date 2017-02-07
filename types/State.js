const pipe = require('value-pipe')
const State = require('inu/state')

const pathModule = require('../lib/pathModule')
const scopeModule = require('../lib/scopeModule')

module.exports = {
  transform: pipe(
    pathModule,
    scopeModule,
    State
  ),
  glob: '**/state.js'
}
