const pipe = require('value-pipe')

const pathModule = require('../lib/pathModule')
const normalizeNeeds = require('../lib/normalizeNeeds')
const Getter = require('../lib/Getter')

module.exports = {
  transform: pipe(
    pathModule,
    normalizeNeeds,
    Getter
  ),
  glob: '**/get/*.js'
}
