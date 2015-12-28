module.exports = todos

function todos (state = {}, action) {
  switch (action.type) {
    case 'CREATE_TODO':
      return {
        ...state,
        [action.payload.id]: action.payload
      }
    default:
      return state
  }
}
