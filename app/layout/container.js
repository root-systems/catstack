import React from 'react'
import { connect } from 'react-redux'

class LayoutContainer extends React.Component {
  render () {
    const { children } = this.props

    return <div>
      <span>hello world!</span>
      { children }
    </div>
  }
}

export default connect(
  (state) => ({})
)(LayoutContainer)
