const pipe = require('value-pipe')
const { set } = require('libnested')

const pathModule = require('../lib/pathModule')
const Module = require('../lib/module')
const normalizeNeeds = require('../lib/normalizeNeeds')

module.exports = {
  transform: pipe(
    pathModule,
    normalizeNeeds,
    Element
  ),
  glob: '**/element/*.js'
}

function Element (definition) {
  var { path, needs = {}, create } = definition
  var gives = {}
  set(gives, path, true)
  set(needs, ['css', 'element'], 'first')
  const module = { gives, needs, create }
  module.create = (api) => {
    const elementDefinition = create(api)
    if (typeof elementDefinition === 'function') {
      var element = elementDefinition
    } else {
      var styleElement
      const { html, css } = elementDefinition
      var element = function element (properties, children) {
        if (!styleElement) styleElement = api.css.element(html, css)
        return styleElement(properties, children)
      }
    }
    var globalExports = {}
    set(globalExports, path, element)
    return globalExports
  }
  return module
}
