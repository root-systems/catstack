const React = require('react')

module.exports = fetchElement

function fetchElement (Component, props) {
  if (Component.fetchData) {
    Component.fetchData(
      store.getState, store.dispatch,
      props.location, props.params
    )
  }
  return React.createElement(Component, props)
}

