module.exports = {
  needs: {
    'cats.get.cats': 'first'
  },
  create: (api) => ({
    cats: api.cats.get.cats
  })
}
