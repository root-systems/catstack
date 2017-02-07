// TODO extract into `bulk-require-async`
// and `bulkify-async`
// and `./lib/transformModule`

const { assign, keys } = Object
const assert = require('assert')
const { join, sep } = require('path')
const readDirectory = require('read-directory')
const Matcher = require('minimatch').Minimatch
const requireFromString = require('require-from-string')
const mapValues = require('modify-values')

module.exports = readModules

function readModules (options, cb) {
  const { dirname, types } = options

  // pre-compile type matchers
  const matchers = mapValues(types, ({ glob }) => {
    const matcher = Matcher(glob)
    return filePath => matcher.match(filePath)
  })

  readDirectory(dirname, {
    filter: '**/*.js',
    dirnames: [dirname],
    transform
  }, cb)

  function transform (fileContent, parsedFilePath) {
    const filePath = join(parsedFilePath.dir, parsedFilePath.base)
    const path = join(parsedFilePath.dir, parsedFilePath.name).split(sep)
    const exports = requireFromString(fileContent, filePath, {
      appendPaths: [dirname]
    })
    const module = assign({ path }, exports)
    const modules = keys(types).reduce((sofar, typeName) => {
      if (sofar !== null) return sofar
      const { transform } = types[typeName]
      const match = matchers[typeName]
      return match(filePath)
        ? transform(module)
        : null
    }, null)
    return modules
  }
}
