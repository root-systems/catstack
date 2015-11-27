const React = require('react')
const { render } = require('react-dom')
const { createStore, applyMiddleware } = require('redux')
const { Provider } = require('react-redux')
const logger = require('redux-logger')
const thunk = require('redux-thunk')

const reducer = require('./reducers')
const { getAllTodos } = require('./actions')
const App = require('./containers/App')

const middleware = process.env.NODE_ENV === 'production' ?
  [ thunk ] :
  [ thunk, logger() ]

const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore)
const store = createStoreWithMiddleware(reducer)

store.dispatch(getAllTodos())

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
