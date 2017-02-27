const pipe = require('value-pipe')

const Service = require('../lib/Service')
const pathModule = require('../lib/pathModule')
const normalizeNeeds = require('../lib/normalizeNeeds')

module.exports = {
  transform: pipe(
    pathModule,
    normalizeNeeds,
    Service
  ),
  // glob: '**/+(services/*|service).js'
  glob: '**/service.js'
}
