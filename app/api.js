const bulk = require('bulk-require')
import http from 'http'
import Server from 'feathers'
import hooks from 'feathers-hooks'
import rest from 'feathers-rest'
import bodyParser from 'body-parser'
import cors from 'cors'
import { mapValues, forEach, assign, reduce } from 'lodash'

const services = assign(
  mapValues(
    bulk(__dirname, '*/service.js'),
    (module) => module.service.default
  ),
  reduce(
    bulk(__dirname, '*/services/*.js'),
    (sofar, module) => assign(
      sofar,
      mapValues(
        module.services,
        m => m.default
      )
    ),
    {}
  )
)

export function createServer (config) {
  const app = Server()
    .use(cors())
    .configure(rest())
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: true }))
    .configure(hooks())

  useAll(app, services)

  return http.createServer(app)
}

function useAll (app, services) {
  forEach(services, (service, name) => {
    app.use(`/${name}`, service)
  })
}
