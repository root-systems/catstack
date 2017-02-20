const { get, set, map } = require('libnested')
const vas = require('vas')

module.exports = Client

function Client (definition) {
  const { path, manifest, adapter } = definition
  var gives = {
    service: {
      manifest: true,
      handler: true,
      adapter: true
    }
  }
  set(gives, path, map(manifest, v => true))
  return {
    needs: {
      http: {
        Client: 'first'
      }
    },
    gives,
    create: (api) => {
      var client
      var emitter
      var exports = {}

      set(exports, path, map(manifest, (methodType, methodPath) => {
        return (...args) => {
          return get(getEmitter(), path.concat(methodPath))(...args)
        }
      }))

      exports.service = {
        manifest: () => getClient().manifest,
        handler: (...args) => getClient().handler(...args),
        adapter: () => getClient().adapter
      }

      return exports

      function getClient () {
        if (!client) client = vas.Client(api.http.Client, { path, manifest, adapter })
        return client
      }

      function getEmitter () {
        if (!emitter) emitter = vas.Emitter(getClient())
        return emitter
      }
    }
  }
}

