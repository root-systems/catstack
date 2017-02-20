const { assign } = Object
const { set, map } = require('libnested')
const vas = require('vas')

module.exports = Service

function Service (definition) {
  const { path, needs, manifest, adapter, create } = definition
  var gives = {
    service: {
      manifest: true,
      handler: true,
      adapter: true
    }
  }
  set(gives, path, map(manifest, v => true))
  return {
    needs,
    gives,
    create: (api) => {
      const serviceDefinition = assign({}, create(api), {
        path,
        manifest,
        adapter
      })
      const service = vas.Service(serviceDefinition)
      var exports = vas.Emitter(service)
      exports.service = {
        manifest: () => service.manifest,
        handler: service.handler,
        adapter: () => service.adapter
      }
      return exports
    }
  }
}
