const feathers = require('feathers')
const { mapObjIndexed, reduce, toPairs } = require('ramda')

const services = require('app/services')

module.exports = createServices

function createServices(config) {
  const app = feathers()

  useAll(app, services)

  return app
}

function useAll (app, services) {
  return reduce((app, [name, service]) => {
    return app.use(`/${name}`, service)
  }, app, toPairs(services))
}

