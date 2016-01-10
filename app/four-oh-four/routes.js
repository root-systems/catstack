import React from 'react'
import { Route } from 'react-router'

import FourOhFourContainer from './container'

export default function (store) {
  return <Route path="*" component={FourOhFourContainer} />
}
