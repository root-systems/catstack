module.exports = {
  needs: {
    'cats.effect.fetchAll': 'first'
  },
  create: (api) => ({
    update: (model) => ({
      model,
      effect: api.cats.effect.fetchAll()
    })
  })
}
