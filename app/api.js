const bulk = require('bulk-require')
import http from 'http'
import Server from 'feathers'
import hooks from 'feathers-hooks'
import rest from 'feathers-rest'
import bodyParser from 'body-parser'
import cors from 'cors'
import { map, mapObjIndexed, reduce, toPairs } from 'ramda'

const services = Object.assign(
  map(
    (module) => module.service.default,
    bulk(__dirname, '*/service.js')
  ),
  map(
    (module) => module.services.map(m => m.default),
    bulk(__dirname, '*/services/*.js')
  )
)

export function createServer (config) {
  const server = Server()
    .use(cors())
    .configure(rest())
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: true }))
    .configure(hooks())

  useAll(server, services)

  return http.createServer(server)
}

function useAll (app, services) {
  return reduce((app, [name, service]) => {
    return app.use(`/${name}`, service)
  }, app, toPairs(services))
}
