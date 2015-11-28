const React = require('react')
const { connect } = require('react-redux')

class NoMatch extends React.Component {
  render () {
    return <div>
      no match!
    </div>
  }
}

module.exports = connect(
  (state) => { return {} }
)(NoMatch)
