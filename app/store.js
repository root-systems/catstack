const { createStore, compose, applyMiddleware } = require('redux')
const thunk = require('redux-thunk')
const { reduxReactRouter } = require('redux-router')
const { createHistory } = require('history')

const reducer = require('app/reducers')
const routes = require('routes')

let storeEnhancers  = []
let middleware = []

middleware.push(thunk)

if (process.env.NODE_ENV === 'development') {
  var logger = require('redux-logger')
  var { persistState } = require('redux-devtools')
  
  var DevTools = require('app/components/dev-tools')
}

storeEnhancers.push(
  applyMiddleware(...middleware)
)

storeEnhancers.push(
  reduxReactRouter({
    //routes,
    createHistory
  })
)

if (process.env.NODE_ENV === 'development') {

  storeEnhancers.push(
    applyMiddleware(logger())
  )
  storeEnhancers.push(DevTools.instrument())
  storeEnhancers.push(persistState(
    window.location.href.match(
      /[?&]debug_session=([^&]+)\b/
    )
  ))
}

const createEnhancedStore = compose(
  ...storeEnhancers
)(createStore)

function configureStore(initialState) {
  const store = createEnhancedStore(reducer, initialState)

  if (process.env.NODE_ENV === 'development') {
    if (module.hot) {
      module.hot.accept('app/reducers', () =>
        store.replaceReducer(require('app/reducers'))
      )
    }
  }

  return store
}

module.exports = configureStore

