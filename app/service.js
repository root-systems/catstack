import knexService from 'feathers-knex'
import memoryService from 'feathers-memory'

function dbService (options) {
  var db = require('app/db')

  return Object.assign(options, {
    Model: db
  })
}

export default process.env.NODE_ENV === 'test' ?
  memoryService :
  dbService
