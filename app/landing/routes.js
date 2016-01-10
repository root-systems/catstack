import React from 'react'
import { IndexRoute } from 'react-router'

import LandingContainer from './container'

export default function (store) {
  return <IndexRoute component={LandingContainer} />
}
