import feathers from 'feathers'
import { mapObjIndexed, reduce, toPairs } from 'ramda'

import services from 'app/services'
import config from 'app/config'

export default function createServer (config) {
  const app = feathers()

  useAll(app, services)

  return app
}

function useAll (app, services) {
  return reduce((app, [name, service]) => {
    return app.use(`/${name}`, service)
  }, app, toPairs(services))
}
