const { createStore, compose, applyMiddleware } = require('redux')
const thunk = require('redux-thunk')
const logger = require('redux-logger')
const { reduxReactRouter, routerStateReducer, ReduxRouter } = require('redux-router')
const { createHistory } = require('history')

const rootReducer = require('app/reducers')
const routes = require('routes')

let storesEnhancers  = []
let middleware = []

middleware.push(thunk)

if (process.env.NODE_ENV === 'development') {
  const { persistState } = require('redux-devtools')

  middleware.push(logger())
}

storesEnhancers.push(
  applyMiddleware(middleware)
)

if (process.env.NODE_ENV === 'development') {
  storesEnhancers.push(DevTools.instrument())
  storesEnhancers.push(persistState(
    window.location.href.match(
      /[?&]debug_session=([^&]+)\b/
    )
  ))
}

storesEnhancers.push(
  reduxReactRouter({
    routes, createHistory
  })
)

const finalCreateStore = compose(
  ...storesEnhancers
)(createStore)

function configureStore(initialState) {
  const store = finalCreateStore(rootReducer, initialState)

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

