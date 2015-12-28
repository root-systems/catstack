const bulk = require('bulk-require')
const { combineReducers } = require('redux')
const { routeReducer } = require('redux-simple-router')
const { map } = require('ramda')

module.exports = combineReducers({
  ...map(
    (module) => module.reducer,
    bulk(__dirname, '*/reducer.js')
  ),
  ...map(
    (module) => combineReducers(module.reducers),
    bulk(__dirname, '*/reducers/*.js')
  ),
  routing: routeReducer
})
