import feathers from 'feathers'
import { mapObjIndexed, reduce, toPairs } from 'ramda'

const stackCreators = {
  services: require('./services'),
  static: require('./static'),
  render: require('./render')
}

export default function createStack(config) {
  const stacks = createStacks(config)

  const app = feathers()

  useAll(app, stacks)

  return app
}

function createStacks (config) {
  return mapObjIndexed(
    (stackCreator, name) => {
      return stackCreator(config[name])
    },
    stackCreators
  )
}

function useAll (app, services) {
  return reduce((app, [name, service]) => {
    return app.use(service)
  }, app, toPairs(services))
}

