import validate from 'feathers-tcomb'

import service from 'app/service'

import { Todo } from './models'

export default service({
  name: 'todos'
})
//.extend({
//  setup: function (app) {
//    validate(app.service('todos'), Todo)
//  }
//})
