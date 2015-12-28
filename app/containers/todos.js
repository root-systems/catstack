const React = require('react')
const { connect } = require('react-redux')

class TodosContainer extends React.Component {
  render () {
    return <div>
      todo list!
    </div>
  }
}

module.exports = connect(
  (state) => ({})
)(TodosContainer)
