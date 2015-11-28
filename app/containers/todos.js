const React = require('react')
const { connect } = require('react-redux')

class Todos extends React.Component {
  render () {
    return <div>
      todo list!
    </div>
  }
}

module.exports = connect(
  Todos,
  (state) => { return {} }
)
