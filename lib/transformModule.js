const { keys, assign } = Object
const Matcher = require('minimatch').Minimatch
const mapValues = require('modify-values')

module.exports = createModuleTransformer

function createModuleTransformer (types) {
  // pre-compile type matchers
  const matchers = mapValues(types, ({ glob }) => {
    const matcher = Matcher(glob)
    return filename => matcher.match(filename)
  })

  return function transformModule (exports, path) {
    const filename = path.join('/') + '.js'
    const module = assign({ path }, exports)
    const transformedModule = keys(types).reduce((sofar, typeName) => {
      if (sofar !== null) return sofar
      const { transform } = types[typeName]
      const match = matchers[typeName]
      return match(filename)
        ? transform(module, { filename })
        : null
    }, null)
    return transformedModule
  }
}
