const bulk = require('bulk-require')
import { combineReducers } from 'redux'
import { routeReducer } from 'redux-simple-router'
import { map, mapValues, assign, camelCase, mapKeys } from 'lodash'

export default combine(assign(
  mapValues(
    bulk(__dirname, '*/reducer.js'),
    (module) => module.reducer.default
  ),
  mapValues(
    bulk(__dirname, '*/reducers/*.js'),
    (module) => combine(
      mapValues(
        module.reducers,
        m => m.default
      )
    )
  ),
  {
    routing: routeReducer
  }
))

function combine (reducers) {
  return combineReducers(
    mapKeys(
      reducers,
      (reducer, name) => camelCase(name)
    )
  )
}
