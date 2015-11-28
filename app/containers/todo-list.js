const React = require('react')
const { connect } = require('react-redux')

class TodoList extends React.Component {
  render () {
    return <div>
      todo list!
    </div>
  }
}

module.exports = connect(
  TodoList,
  (state) => { return {} }
)
