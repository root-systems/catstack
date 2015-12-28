const React = require('react')
const { connect } = require('react-redux')

class LandingContainer extends React.Component {
  render () {
    return <div>
      landing!
    </div>
  }
}

module.exports = connect(
  (state) => ({})
)(LandingContainer)
