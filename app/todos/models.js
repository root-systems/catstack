import t from 'tcomb'

export const Todo = t.struct({
  id: t.Number,
  text: t.String,
  complete: t.Boolean
}, 'Todo')

export const Todos = t.list(Todo, 'Todos')
