const { Route } = require('react-router')

const App = require('app/containers/app')
const TodoList = require('app/containers/todo-list')

const routes = (
  <Route path='/' component={App}>
    <Route path='todos' component={TodoList} />
  </Route>
)

module.exports = routes
