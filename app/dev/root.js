import React from 'react'
import { Provider } from 'react-redux'
import { ReduxRouter } from 'redux-router'

import routes from 'app/routes'

if (process.env.NODE_ENV === 'development') {
  var DevTools = require('app/components/dev-tools')
}

export default class Root extends React.Component {
  render() {
    const { store } = this.props;

    return (
      <Provider store={store}>
        <div>
          <ReduxRouter>
            { routes }
          </ReduxRouter>
          {
            (process.env.NODE_ENV === 'development') ?
              <DevTools /> : null
          }
        </div>
      </Provider>
    )
  }
}
