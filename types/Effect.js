const pipe = require('value-pipe')
const Effect = require('inu/effect')

const pathModule = require('../lib/pathModule')
const normalizeNeeds = require('../lib/normalizeNeeds')
const scopeModule = require('../lib/scopeModule')

module.exports = {
  transform: pipe(
    pathModule,
    normalizeNeeds,
    scopeModule,
    Effect
  ),
  glob: '**/effects/*.js'
}
