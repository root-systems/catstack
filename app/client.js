const React = require('react')
const { render } = require('react-dom')
const { createStore, applyMiddleware } = require('redux')
import { reduxReactRouter, routerStateReducer, ReduxRouter } from 'redux-router';
const { Provider } = require('react-redux')
const thunk = require('redux-thunk')

const createInitialState = require('app/state')
const configureStore = require('app/store')
const { getAllTodos } = require('app/actions')
const Root = require('app/containers/root')

const store = configureStore(
  createInitialState()
)

//store.dispatch(getAllTodos())

const main = document.createElement('main')

document.body.appendChild(main)

render(<Root />, main)
