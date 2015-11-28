module.exports = todos

function todos (state = {}, action) {
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
