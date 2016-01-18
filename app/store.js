import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { syncHistory } from 'redux-simple-router'

import reducer from 'app/reducer'

if (process.env.NODE_ENV === 'development') {
  var logger = require('redux-logger')
  var DevTools = require('app/util/dev-tools').default
}

let storeEnhancers  = []
let middleware = []

middleware.push(thunk)

if (process.env.NODE_ENV === 'development') {
  if (process.browser) {
    middleware.push(logger())
  }

  storeEnhancers.push(DevTools.instrument())

  if (module.browser) {
    let { persistState } = require('redux-devtools')
    storeEnhancers.push(persistState(
      window.location.href.match(
        /[?&]debug_session=([^&]+)\b/
      )
    ))
  }
}

export default function finalCreateStore(initialState, history) {
  const historyMiddleware = syncHistory(history)

  const finalMiddleware = middleware.concat([
    historyMiddleware
  ])

  const createEnhancedStore = compose(
    applyMiddleware(...finalMiddleware),
    ...storeEnhancers
  )(createStore)

  const store = createEnhancedStore(reducer, initialState)

  if (process.env.NODE_ENV === 'development') {
    historyMiddleware.listenForReplays(store)
  }

  if (module.hot) {
    module.hot.accept('app/reducer', () => {
      store.replaceReducer(require('app/reducer'))
    })
  }

  return store
}
