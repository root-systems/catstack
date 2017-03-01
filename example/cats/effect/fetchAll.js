module.exports = {
  needs: {
    pull: {
      pipe: 'first',
      map: 'first'
    },
    cats: {
      'service.all': 'first',
      'action.set': 'first'
    }
  },
  create: (api) => ({
    run: (model, cat) => api.pull.pipe(
      api.cats.service.all(),
      api.pull.map(api.cats.action.set)
    )
  })
}
