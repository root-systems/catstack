const React = require('react')
const { connect } = require('react-redux')

class App extends React.Component {
  render () {
    const { children } = this.props

    return <div>
      <span>hello world!</span>
      { children }
    </div>
  }
}

module.exports = connect(
  (state) => { return {} }
)(App)
