require('babel-core/register')
require('css-modules-require-hook')

const _ = require('lodash')
const parallel = require('run-parallel')

const config = require('app/config')

module.exports = function () {
  const servers = _.mapValues({
    static: require('app/static'),
    api: require('app/api'),
    render: require('app/render'),
    proxy: require('app/proxy')
  }, function (module) {
    return module.createServer(config)
  })

  function start (cb) {
    parallel(
      _.map(servers, function (server, name) {
        return function (callback) {
          server.listen(config[name].port, callback)
        }
      }),
      cb
    )
  }
  
  function close (cb) {
    parallel(
      _.map(servers, function (server, name) {
        return function (callback) {
          server.close(callback)
        }
      }),
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
