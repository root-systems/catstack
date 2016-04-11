import React from 'react'
import { Route, IndexRoute } from 'react-router'

import IndexContainer from './containers/index'

export default function (store) {
  return <Route path="todos">
    <IndexRoute component={IndexContainer} />
  </Route>
}
