const bulk = require('bulk-require')
const { combineReducers } = require('redux')
const { routerStateReducer } = require('redux-router')

module.exports = combineReducers({
  ...bulk(__dirname, '!(index.js)'),
  router: routerStateReducer
})
