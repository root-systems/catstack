const bulk = require('bulk-require')
const { combineReducers } = require('redux')

module.exports = combineReducers(
  bulk(__dirname, '*.js')
)
