import { createSelector, createStructuredSelector } from 'reselect'

export const getTodos = (state) => state.todos.records

export const getIndexProps = createStructuredSelector({
  todos: getTodos
})
