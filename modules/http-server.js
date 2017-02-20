const Url = require('url')
const http = require('http')
const compose = require('http-compose')
const Sender = require('http-sender')
const vas = require('vas')
const vasHttp = require('vas-http')

module.exports = {
  needs: {
    log: {
      warn: 'first',
      info: 'first'
    },
    config: {
      http: {
        port: 'first'
      }
    },
    service: {
      handler: 'first',
      manifest: 'map',
      adapter: 'map'
    },
    http: {
      createError: 'first',
      createServer: 'first',
      createStack: 'first',
      errorResponder: 'first',
      notFoundResponder: 'first',
      handler: 'map',
      server: 'first',
      valueResponder: 'first'
    }
  },
  gives: {
    config: {
      http: {
        port: true
      }
    },
    server: {
      start: true
    },
    http: {
      createStack: true,
      createError: true,
      createServer: true,
      errorResponder: true,
      notFoundResponder: true,
      handler: true,
      server: true,
      valueResponder: true
    }
  },
  create: (api) => {
    var httpServer
    return {
      config: { http: { port } },
      server: { start },
      http: {
        createError,
        createServer,
        createStack,
        errorResponder,
        notFoundResponder,
        handler,
        server,
        valueResponder
      }
    }

    function port () {
      return 5000
    }

    function handler () {
      const service = {
        handler: api.service.handler,
        manifest: vas.combine.manifests(api.service.manifest()),
        adapter: vas.combine.manifests(api.service.adapter())
      }
      return vas.Server(vasHttp.Server, service)
    }

    function errorResponder () {}

    function valueResponder () {}

    function notFoundResponder () {}

    function createStack (handlers) {
      const valueResponder = api.http.valueResponder()
      const errorResponder = api.http.errorResponder()
      const notFoundResponder = api.http.notFoundResponder()

      const handler = compose(handlers)
      const Send = Sender({
        value: api.http.valueResponder(),
        error: api.http.errorResponder(),
        notFound: api.http.notFoundResponder()
      })

      return (req, res) => {
        const url = Url.parse(req.url)
        handler(req, res, { url }, Send(req, res))
      }
    }

    function server () {
      // only create one http server so this function
      // provides a shared reference.
      if (!httpServer) {
        httpServer = api.http.createServer(
          api.http.createStack(
            api.http.handler()
          )
        )
      }
      return httpServer
    }

    function start (cb) {
      const httpServer = api.http.server()

      // TODO noop if already started?

      httpServer.listen(api.config.http.port(), function () {
        api.log.info({
          port: httpServer.address().port,
          env: process.env.NODE_ENV || 'undefined'
        }, 'listening')
        cb && cb()
      })

      return stop

      function stop (cb) {
        httpServer.close(cb)
      }
    }

    function createServer (requestListener) {
      return http.createServer(requestListener)
    }
  }
}

function createError (options) {
  assert.equal(typeof options, 'object', 'catstack/modules/http.createError: options should be type object')
  const { name, statusCode, message, data } = options
  if (name && !statusCode && !data) {
    return createHttpError[name](message)
  }
  assert.equal(typeof statusCode, 'number', 'catstack/modules/http.createError: statusCode should be type number')
  return createHttpError(statusCode, message, data)
}
