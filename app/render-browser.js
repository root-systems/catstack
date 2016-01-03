const React = require('react')
const { render } = require('react-dom')
const { Provider } = require('react-redux')
const { Router } = require('react-router')
const { createHistory } = require('history')
const { syncReduxAndRouter } = require('redux-simple-router')

const routes = require('app/routes')
const createStore = require('app/store')
const fetchElement = require('app/util/fetch-element')

if (process.env.NODE_ENV === 'development') {
}

const store = createStore(window.__data)
const history = createHistory()

syncReduxAndRouter(history, store)

const main = (
  <Router createElement={fetchElement} history={history}>
    { routes }
  </Router>
)

render(
  <Provider store={store} key="provider">
    { main }
  </Provider>,
  document.querySelector('main')
)

if (process.env.NODE_ENV === 'development') {
  const DevTools = require('app/dev/tools')

  render(
    <Provider store={store} key="provider">
      <div>
        { main }
        <DevTools />
      </div>
    </Provider>,
    document.querySelector('main')
  )
}
