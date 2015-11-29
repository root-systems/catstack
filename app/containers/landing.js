const React = require('react')
const { connect } = require('react-redux')

class Landing extends React.Component {
  render () {
    return <div>
      landing!
    </div>
  }
}

module.exports = connect(
  (state) => { return {} }
)(Landing)
