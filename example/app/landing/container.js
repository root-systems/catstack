import React from 'react'
import { connect } from 'react-redux'

import Landing from './component'

class LandingContainer extends React.Component {
  render () {
    return <Landing />
  }
}

export default connect(
  (state) => ({})
)(LandingContainer)
