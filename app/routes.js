const React = require('react')
const { Route, IndexRoute } = require('react-router')

const App = require('app/containers/app')
const Landing = require('app/containers/landing')
const Todos = require('app/containers/todos')
const NoMatch = require('app/containers/no-match')

const routes = (
  <Route path='/' component={App}>
    <IndexRoute component={Landing} />
    <Route path='todos' component={Todos} />
    <Route path="*" component={NoMatch} />
  </Route>
)

module.exports = routes
