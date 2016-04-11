const feathers = require('feathers')
const rest = require('feathers-rest')
const hooks = require('feathers-hooks')
const bodyParser = require('body-parser')
const forEach = require('lodash/forEach')

const Options = Tc.struct({
  config: Tc.Object,
  services: Tc.dict(Tc.String, Tc.Function, 'Services')
})

module.exports = Tc.func(Options, Tc.Nil).of(createApi)

function createApi (options) {
  const api = feathers()
    .configure(rest())
    .configure(hooks())
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: true }))

  useServices(api, options)

  return app
}

function useAll (api, { config, services }) {
  forEach(services, (service, name) => {
    api.use(`/${name}`, service(config))
  })
}
