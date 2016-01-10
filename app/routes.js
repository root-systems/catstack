const bulk = require('bulk-require')
import React from 'react'
import { Route, IndexRoute } from 'react-router'
import { map, assign } from 'lodash'

import LayoutContainer from 'app/layout/container'
import FourOhFourRoutes from 'app/four-oh-four/routes'
import TodosRoutes from 'app/todos/routes'
import LandingRoutes from 'app/landing/routes'

export default function appRoutes (store) {
  return <Route path='/' component={LayoutContainer}>
    { 
      map(
        bulk(__dirname, '!(four-oh-four)/routes.js'),
        (module, moduleName) => ({
          ...module.routes.default(store),
          key: moduleName
        })
      )
    }
    { FourOhFourRoutes(store) }
  </Route>
}
