const feathers = require('feathers')
const { mapObj, reduce } = require('ramda')

const createServices = require('./services')

function start (config) {
  const services = mapObj(
    (serviceCreator, name) => serveCreator(config[name]),
    serviceCreators
  )
}
