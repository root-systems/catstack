const pipe = require('value-pipe')
const Action = require('inu/action')

const pathModule = require('../lib/pathModule')
const normalizeNeeds = require('../lib/normalizeNeeds')
const scopeModule = require('../lib/scopeModule')

module.exports = {
  transform: pipe(
    pathModule,
    normalizeNeeds,
    scopeModule,
    Action
  ),
  glob: '**/actions/*.js'
}
