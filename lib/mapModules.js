const { set } = require('libnested')
const isModule = require('depject/is')

module.exports = mapModules

function mapModules (obj, iter) {
  var o = {}
  eachModule(obj, (v, path) => {
    set(o, path, iter(v, path))
  })
  return o
}

function eachModule (obj, iter, path) {
  path = path || []
  for (var k in obj) {
    if (isObject(obj[k])) {
      if (isModule(obj[k])) iter(obj[k], path.concat(k))
      else eachModule(obj[k], iter, path.concat(k))
    }
  }
}

function isObject (o) {
  return o && 'object' === typeof o && !Array.isArray(o)
}
