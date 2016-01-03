const bulk = require('bulk-require')
import { combineReducers } from 'redux'
import { routeReducer } from 'redux-simple-router'
import { map } from 'ramda'

export default combineReducers({
  ...map(
    (module) => module.reducer.default,
    bulk(__dirname, '*/reducer.js')
  ),
  ...map(
    (module) => combineReducers(
      module.reducers.map(m => m.default)
    ),
    bulk(__dirname, '*/reducers/*.js')
  ),
  routing: routeReducer
})
