import React from 'react'
import { connect } from 'react-redux'

class TodosContainer extends React.Component {
  render () {
    return <div>
      todo list!
    </div>
  }
}

export default connect(
  (state) => ({})
)(TodosContainer)
