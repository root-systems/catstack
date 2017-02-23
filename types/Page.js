const pipe = require('value-pipe')

const normalizeNeeds = require('../lib/normalizeNeeds')
const Page = require('../lib/Page')

module.exports = {
  transform: pipe(
    normalizeNeeds,
    Page
  ),
  glob: '**/page/*.js'
}
