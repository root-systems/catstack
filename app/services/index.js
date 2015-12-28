const bulk = require('bulk-require')
const { map } = require('ramda')

module.exports = {
  ...bulk(__dirname, '*/service.js'),
  ...map(
    (module) => module.services,
    bulk(__dirname, '*/services/*.js')
  )
}
