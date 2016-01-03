const feathers = require('feathers')
const { mapObjIndexed, reduce, toPairs } = require('ramda')

const services = require('app/services')
const config = require('app/config')

module.exports = createServer

function createServer (config) {
  const app = feathers()

  useAll(app, services)

  return app
}

function useAll (app, services) {
  return reduce((app, [name, service]) => {
    return app.use(`/${name}`, service)
  }, app, toPairs(services))
}
