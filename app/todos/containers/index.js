import React from 'react'
import { connect } from 'react-redux'
import { map } from 'lodash'

import actions from '../actions'
import TodoList from '../components/todo-list'
import Todo from '../components/todo'

class TodosContainer extends React.Component {
  static fetchData = (getState, dispatch, location, params) => {
    return dispatch(actions.find())
  }

  render () {
    return <TodoList>
      {
        map(this.props.todos, todo => {
          return <Todo todo={todo} />
        })
      }
    </TodoList>
  }
}

export default connect(
  (state) => ({
    todos: state.todos.records
  })
)(TodosContainer)
