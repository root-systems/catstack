const { set } = require('libnested')

module.exports = Module

function Module (definition) {
  const { path, gives, needs, create } = definition
  var module = { gives, needs, create }
  if (!gives) {
    module.gives = {}
    set(module.gives, path, true)
    module.create = (api) => {
      const exports = create(api)
      var globalExports = {}
      set(globalExports, path, exports)
      return globalExports
    }
  }
  return module
}
