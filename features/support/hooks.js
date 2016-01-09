require('babel-core/register')
require('css-modules-require-hook')

const R = require('ramda')
const parallel = require('run-parallel')

const config = require('app/config')

module.exports = function () {
  const servers = R.map(function (module) {
    return module.createServer(config)
  }, {
    static: require('app/static'),
    api: require('app/api'),
    render: require('app/render')
  })

  function start (cb) {
    parallel(
      R.values(R.mapObjIndexed(function (server, name) {
        return function (callback) {
          server.listen(config[name].url.port, callback)
        }
      }, servers)),
      cb
    )
  }
  
  function close (cb) {
    parallel(
      R.values(R.mapObjIndexed(function (server, name) {
        return function (callback) {
          server.close(callback)
        }
      }, servers)),
      cb
    )
  }

  this.registerHandler('BeforeFeatures', function (ev, cb) {
    start(cb)
  })

  this.registerHandler('AfterFeatures', function (ev, cb) {
    close(cb)
  })
}
