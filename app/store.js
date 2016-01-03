import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { createHistory } from 'history'

import reducer from 'app/reducer'

if (process.env.NODE_ENV === 'development') {
  var logger = require('redux-logger')
  var DevTools = require('app/dev/tools').default
}

let storeEnhancers  = []
let middleware = []

middleware.push(thunk)

storeEnhancers.push(
  applyMiddleware(...middleware)
)

if (process.env.NODE_ENV === 'development') {
  storeEnhancers.push(
    applyMiddleware(logger())
  )

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

const createEnhancedStore = compose(
  ...storeEnhancers
)(createStore)

export default function finalCreateStore(initialState) {
  const store = createEnhancedStore(reducer, initialState)

  if (module.hot) {
    module.hot.accept('app/reducer', () => {
      store.replaceReducer(require('app/reducer'))
    })
  }

  return store
}
