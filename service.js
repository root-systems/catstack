
import knexService from 'feathers-knex'
import memoryService from 'feathers-memory'
import { assign } from 'lodash'

function dbService (options) {
  var db = require('app/db').default

  return knexService(
    assign(options, {
      Model: db
    })
  )
}

export default process.env.NODE_ENV === 'test' ?
  memoryService :
  dbService
