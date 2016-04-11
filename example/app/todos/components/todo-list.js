import React from 'react'

import style from './todo.css'

export default class TodoList extends React.Component {
  render () {
    return <ul>
      {
        React.Children.map(this.props.children, (todo, todoKey) => {
          return <li key={todoKey}>{ todo }</li>
        })
      }
    </ul>
  }
}
