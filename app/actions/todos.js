const createAction = require('redux-actions')
const { t } = require('redux-tcomb')
const Promise = require('pinkie-promise')

const actionTypes = require('app/action-types/todos')
const model = require('app/model/todo')

const findTodos = createAction(
  actionTypes.FIND_TODOS,
  t.struct({
    // TODO
  })
)

const getTodo = createAction(
  actionTypes.GET_TODO,
  t.Number
)

const updateTodo = createAction(
  actionTypes.UPDATE_TODO,
  model
)

const patchTodo = createAction(
  actionTypes.PATCH_TODO,
  model
)

const removeTodo = createAction(
  actionTypes.REMOVE_TODO,
  t.Number
)

const addTodoType = t.struct({
  text: t.String
})

const addTodo = createAction(
  actionTypes.ADD_TODO,
  (todo) {
    return (dispatch, getState) {
      return Promise.all([
        dispatch(actionTypes.CREATE_TODO)
      ])
    }
  }
)

const patchTodo = createAction(
  actionTypes.PATCH_TODO,
  t.struct({
    text: t.String
  })
)

module.exports = {
  findTodos,
  getTodo,
  createTodo,
  updateTodo,
  patchTodo,
  removeTodo,

  addTodo,

}
