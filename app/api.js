const bulk = require('bulk-require')
import feathers from 'feathers'
import hooks from 'feathers-hooks'
import rest from 'feathers-rest'
import bodyParser from 'body-parser'
import { map, mapObjIndexed, reduce, toPairs } from 'ramda'

const services = {
  ...map(
    (module) => module.service.default,
    bulk(__dirname, '*/service.js')
  ),
  ...map(
    (module) => module.services.map(m => m.default),
    bulk(__dirname, '*/services/*.js')
  )
}

export default module.exports = createApi

function createApi (config) {
  const app = feathers()
    .configure(rest())
    .configure(hooks())
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: true }))

  useAll(app, services)

  return app
}

function useAll (app, services) {
  return reduce((app, [name, service]) => {
    return app.use(`/${name}`, service)
  }, app, toPairs(services))
}
