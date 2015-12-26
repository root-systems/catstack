const { t } = require('redux-tcomb')

module.exports = t.struct({
  id: t.Number,
  text: t.String,
  completed: t.Boolean
}, 'Todo')
