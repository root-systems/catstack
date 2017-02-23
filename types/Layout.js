const pipe = require('value-pipe')

const pathModule = require('../lib/pathModule')
const Module = require('../lib/module')
const normalizeNeeds = require('../lib/normalizeNeeds')

module.exports = {
  transform: pipe(
    pathModule,
    normalizeNeeds,
    Module
  ),
  glob: '**/layouts/*.js'
}
