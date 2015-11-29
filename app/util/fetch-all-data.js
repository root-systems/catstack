// https://github.com/jlongster/react-redux-universal-hot-example/blob/master/src/helpers/fetchAllData.js

const Promise = require('pinkie-promise')

module.exports = fetchAllData

function fetchAllData(components, getState, dispatch, location, params) {
  const fetchers = components
    .filter((component) => !!component) // Weed out 'undefined' routes
    .filter((component) => component.fetchData) // only look at ones with a static fetchData()
    .map((component) => component.fetchData) // pull out fetch data methods
    .map(fetchData => {
      return fetchData(getState, dispatch, location, params)
    }) // call fetch data methods and return promises

  return Promise.all(fetchers)
}
