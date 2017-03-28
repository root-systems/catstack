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
  set(needs, ['css', 'Element'], 'first')
  set(needs, ['css', 'connect'], 'first')
  set(needs, ['css', 'combineRules'], 'first')
  set(needs, ['html', 'h'], 'first')
  const module = { gives, needs, create }
  module.create = (api) => {
    const ElementCtor = create(api)
    var globalExports = {}
    set(globalExports, path, ElementCtor)
    return globalExports
  }
  return module
}
