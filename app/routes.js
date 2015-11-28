const React = require('react')
const { Route } = require('react-router')

const App = require('app/containers/app')
const Todos = require('app/containers/todos')
const NoMatch = require('app/containers/no-match')

const routes = (
  <Route path='/' component={App}>
    <Route path='todos' component={Todos} />
    <Route path="*" component={NoMatch} />
  </Route>
)

module.exports = routes
