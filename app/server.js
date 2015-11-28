const feathers = require('feathers')
const { mapObjIndexed, reduce, toPairs } = require('ramda')

const serviceCreators = require('./services')

module.exports = createServer

const useAll = function (app, services) {
  return reduce((app, [name, service]) => {
    return app.use(`/${name}`, service)
  }, app, toPairs(services))
}

function createServer (config) {

  const services = mapObjIndexed(
    (serviceCreator, name) => {
      return serviceCreator(config.services[name])
    },
    serviceCreators
  )

  const server = feathers()

  useAll(server, services)

  return server
}

