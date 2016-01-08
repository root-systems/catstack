import React from 'react'

export default class Todo extends React.Component {
  render () {
    return <div>
      { this.props.todo.text }
    </div>
  }
}
