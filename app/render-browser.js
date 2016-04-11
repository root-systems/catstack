import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { browserHistory as history, Router } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import createRoutes from 'app/routes'
import createStore from 'app/store'
import fetchElement from 'app/util/fetch-element'

if (process.env.NODE_ENV === 'development') {
  var DevTools = require('app/util/dev-tools').default
}

const store = createStore(window.__data, history)
const enhancedHistory = syncHistoryWithStore(history, store)

const main = (
  <Router createElement={fetchElement(store)} history={enhancedHistory}>
    { createRoutes(store) }
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
