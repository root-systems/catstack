const assign = require('object-assign')
const depnest = require('depnest')

module.exports = normalizeNeeds

function normalizeNeeds (module) {
  if (!module.needs) return module
  return assign({}, module, {
    needs: depnest(module.needs)
  })
}
