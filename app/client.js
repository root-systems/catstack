const React = require('react')
const { render } = require('react-dom')
const { createStore, applyMiddleware } = require('redux')
import { reduxReactRouter, routerStateReducer, ReduxRouter } from 'redux-router';
const { Provider } = require('react-redux')
const thunk = require('redux-thunk')

const configureStore = require('app/store')
const { findTodos } = require('app/actions')
const Root = require('app/containers/root')

const store = configureStore()

//store.dispatch(getAllTodos())

render(
  <Root store={store} />,
  document.querySelector('main')
)
