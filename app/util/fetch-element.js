import React from 'react'

export default function fetchElement (store) {
  return function (Component, props) {
    if (Component.fetchData) {
      Component.fetchData(
        store.getState, store.dispatch,
        props.location, props.params
      )
    }
    return React.createElement(Component, props)
  }
}
