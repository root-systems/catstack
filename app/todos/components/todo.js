import React from 'react'

import style from './todo.css'

export default class Todo extends React.Component {
  render () {
    return <div>
      { this.props.todo.text }
    </div>
  }
}
