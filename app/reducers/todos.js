const initialState = require('app/state')

module.exports = todos

function todos (state = initialState, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: {
          ...state.todos,
          [action.payload.id]: action.payload
        }
      }
    default:
      return state
  }
}
