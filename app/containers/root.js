const React = require('react')
const { Provider } = require('react-redux')
const { ReduxRouter } = require('redux-router')

const routes = require('app/routes')

if (process.env.NODE_ENV === 'development') {
  var DevTools = require('app/containers/dev-tools')
}

class Root extends React.Component {
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

module.exports = Root
