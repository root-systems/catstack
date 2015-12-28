const React = require('react')
const { Route, IndexRoute } = require('react-router')
const bulk = require('bulk-require')
const { mapObjIndexed, values } = require('ramda')

const LayoutContainer = require('app/layout/container')
const FourOhFourRoutes = require('app/four-oh-four/routes')

const routes = (
  <Route path='/' component={LayoutContainer}>
    { 
      values(mapObjIndexed(
        (module, moduleName) => ({
          ...module.routes,
          key: moduleName
        }),
        bulk(__dirname, '!(four-oh-four)/routes.js')
      ))
    }
    { FourOhFourRoutes }
  </Route>
)

module.exports = routes
