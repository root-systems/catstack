const pipe = require('value-pipe')
const Page = require('inu-router/Page')

const normalizeNeeds = require('../lib/normalizeNeeds')

module.exports = {
  transform: pipe(
    normalizeNeeds,
    Page
  ),
  glob: '**/pages/*.js'
}
