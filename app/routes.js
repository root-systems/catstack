const React = require('react')
const { Route } = require('react-router')

const App = require('app/containers/app')
const TodoList = require('app/containers/todo-list')
const NoMatch = require('app/containers/no-match')

const routes = (
  <Route path='/' component={App}>
    <Route path='todos' component={TodoList} />
    <Route path="*" component={NoMatch} />
  </Route>
)

module.exports = routes
