const { pull } = require('../../../')

module.exports = {
  needs: {
    'cats.service.all': 'first',
    'cats.actions.set': 'first',
  },
  create: (api) => ({
    run: (model, cat) => pull(
      api.cats.service.all(),
      pull.map(api.cats.actions.set)
    )
  })
}
