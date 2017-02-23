const { keys, assign } = Object
const Matcher = require('minimatch').Minimatch
const mapValues = require('modify-values')

module.exports = createModuleTransformer

function createModuleTransformer (types) {
  // pre-compile type matchers
  const matchers = mapValues(types, ({ glob }) => {
    if (!glob) return () => false
    const matcher = Matcher(glob)
    return filename => matcher.match(filename)
  })

  const { transform: defaultTransform } = types.Module

  return function transformModule (exports, path) {
    const filename = path.join('/') + '.js'
    const module = assign({ path }, exports)
    var moduleTransform = keys(types).reduce((sofar, typeName) => {
      if (sofar !== null) return sofar
      const { transform } = types[typeName]
      const match = matchers[typeName]
      return match(filename) ? transform : null
    }, null)
    if (moduleTransform === null) {
      moduleTransform = defaultTransform
    }
    return moduleTransform(module, { filename })
  }
}
