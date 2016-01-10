import React from 'react'

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
