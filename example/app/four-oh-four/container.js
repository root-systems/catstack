import React from 'react'
import { connect } from 'react-redux'

class FourOhFourContainer extends React.Component {
  render () {
    return <div>
      no match!
    </div>
  }
}

export default connect(
  (state) => ({})
)(FourOhFourContainer)
