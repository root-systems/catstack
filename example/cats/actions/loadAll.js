module.exports = {
  needs: {
    'cats.effects.fetchAll': 'first'
  },
  create: (api) => ({
    update: (model) => ({
      model,
      effect: api.cats.effects.fetchAll()
    })
  })
}
