const bulk = require('bulk-require')
import React from 'react'
import { Route, IndexRoute } from 'react-router'
import { mapObjIndexed, values } from 'ramda'

import LayoutContainer from 'app/layout/container'
import FourOhFourRoutes from 'app/four-oh-four/routes'

export default (
  <Route path='/' component={LayoutContainer}>
    { 
      values(mapObjIndexed(
        (module, moduleName) => ({
          ...module.routes.default,
          key: moduleName
        }),
        bulk(__dirname, '!(four-oh-four)/routes.js')
      ))
    }
    { FourOhFourRoutes }
  </Route>
)
