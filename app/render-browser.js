import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router } from 'react-router'
import { createHistory } from 'history'
import { syncReduxAndRouter } from 'redux-simple-router'

import routes from 'app/routes'
import createStore from 'app/store'
import fetchElement from 'app/util/fetch-element'

if (process.env.NODE_ENV === 'development') {
  var DevTools = require('app/dev/tools').default
}

const store = createStore(window.__data)
const history = createHistory()

syncReduxAndRouter(history, store)

const main = (
  <Router createElement={fetchElement(store)} history={history}>
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
