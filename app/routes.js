const React = require('react')
const { Route, IndexRoute } = require('react-router')

const AppContainer = require('app/containers/app')
const LandingContainer = require('app/containers/landing')
const TodosContainer = require('app/containers/todos')
const NoMatchContainer = require('app/containers/no-match')

const routes = (
  <Route path='/' component={AppContainer}>
    <IndexRoute component={LandingContainer} />
    <Route path='todos' component={TodosContainer} />
    <Route path="*" component={NoMatchContainer} />
  </Route>
)

module.exports = routes
