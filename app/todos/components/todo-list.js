import React from 'react'

export default class TodoList extends React.Component {
  render () {
    return <ul>
      {
        React.Children.map(this.props.children, todo => {
          return <li>{ todo }</li>
        })
      }
    </ul>
  }
}
