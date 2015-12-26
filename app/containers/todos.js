const React = require('react')
const { connect } = require('react-redux')

const Todos = require('app/components/todos')

class TodosPage extends React.Component {
  render () {
    return <div>
      todo list!
    </div>
  }
}

module.exports = connect(
  (state) => { return {} }
)(TodosPage)
