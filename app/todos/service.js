import knexService from 'feathers-knex'
import validate from 'feathers-tcomb'

import db from 'app/db'

import { Todo } from './models'

export default knexService({
  Model: db,
  name: 'todos'
})
//.extend({
//  setup: function (app) {
//    validate(app.service('todos'), Todo)
//  }
//})
