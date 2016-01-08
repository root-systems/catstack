import React from 'react'
import { connect } from 'react-redux'

import actions from './actions'

class TodosContainer extends React.Component {
  static fetchData = (getState, dispatch, location, params) => {
    return dispatch(actions.find())
  }

  render () {
    return <div>
      todo list!
    </div>
  }
}

export default connect(
  (state) => ({})
)(TodosContainer)
