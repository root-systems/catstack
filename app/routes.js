const bulk = require('bulk-require')
import React from 'react'
import { Route, IndexRoute } from 'react-router'
import { map } from 'lodash'

import LayoutContainer from 'app/layout/container'
import FourOhFourRoutes from 'app/four-oh-four/routes'

export default (
  <Route path='/' component={LayoutContainer}>
    { 
      map(
        bulk(__dirname, '!(four-oh-four)/routes.js'),
        (module, moduleName) => ({
          ...module.routes.default,
          key: moduleName
        })
      )
    }
    { FourOhFourRoutes }
  </Route>
)
