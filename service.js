const knexService = require('feathers-knex')
const validate = require('feathers-tcomb')
const assign = require('lodash/assign')
const camelCase = require('lodash/camelCase')

module.exports = createService

function createService (db, collection, options) {
  return knexService(
    assign({}, options, {
      Model: db,
      name: camelCase(collection.meta.name)
    })
  ).extend({
    setup: function (app) {
      validate(this, collection.meta.type)
      this.before({
        create: function (hooks, next) {
          if (hooks.data.id == null) {
            delete hooks.data.id
          }
          next()
        }
      })
    }
  })
}
