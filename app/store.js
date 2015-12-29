const { createStore, compose, applyMiddleware } = require('redux')
const thunk = require('redux-thunk')
const { createHistory } = require('history')

const reducer = require('app/reducer')

let storeEnhancers  = []
let middleware = []

middleware.push(thunk)

storeEnhancers.push(
  applyMiddleware(...middleware)
)

if (process.env.NODE_ENV === 'development') {
  let logger = require('redux-logger')
  storeEnhancers.push(
    applyMiddleware(logger())
  )

  let DevTools = require('app/dev/tools')
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

function finalCreateStore(initialState) {

  if (module.hot) {
    module.hot.accept('app/reducer', () => {
      store.replaceReducer(require('app/reducer'))
    })
  }

  return createEnhancedStore(reducer, initialState)
}

module.exports = finalCreateStore
