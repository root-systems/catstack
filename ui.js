const Tc = require('tcomb')
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
