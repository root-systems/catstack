const createActionTypes = require('create-action-types')

module.exports = createActionTypes([
  'FIND_TODOS',
  'GET_TODO',
  'CREATE_TODO',
  'UPDATE_TODO',
  'PATCH_TODO',
  'REMOVE_TODO',

  'ADD_TODO',
  'EDIT_TODO',
  'COMPLETE_TODO',
  'COMPLETE_ALL_TODOS',
  'CLEAR_COMPLETED_TODOS'
])
