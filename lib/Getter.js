const { isArray } = Array
const assign = require('object-assign')
const depnest = require('depnest')
const {
  createSelector,
  createStructuredSelector
} = require('reselect')

module.exports = Getter

function Getter (definition) {
  const path = definition.path.join('.')
  return assign({}, definition, {
    gives: depnest(path),
    create: (api) => {
      const getter = definition.create(api)
      var selector
      if (typeof getter === 'function') {
        selector = getter
      } else if (isArray(getter)) {
        selector = createSelector(...getter)
      } else if (typeof getter === 'object') {
        selector = createStructuredSelector(getter)
      } else throw Error('Getter: expected .create to return function, array, or object')
      return depnest(path, selector)
    }
  })
}
