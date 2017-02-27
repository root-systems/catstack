const { pull } = require('../../../')

module.exports = {
  needs: {
    'cats.service.all': 'first',
    'cats.action.set': 'first'
  },
  create: (api) => ({
    run: (model, cat) => pull(
      api.cats.service.all(),
      pull.map(api.cats.action.set)
    )
  })
}
