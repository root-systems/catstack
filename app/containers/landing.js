const React = require('react')
const { connect } = require('react-redux')

const Landing = require('app/components/landing')

class LandingContainer extends React.Component {
  render () {
    return <Landing />
  }
}

module.exports = connect(
  (state) => ({})
)(LandingContainer)
