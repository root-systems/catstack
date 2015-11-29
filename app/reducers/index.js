const bulk = require('bulk-require')
const { combineReducers } = require('redux')
const { routeReducer } = require('redux-simple-router')

module.exports = combineReducers({
  ...bulk(__dirname, '!(index.js)'),
  routing: routeReducer
})
