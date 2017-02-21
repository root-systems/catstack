module.exports = {
  needs: {
    'cats.get.currentCat': 'first'
  },
  create: (api) => ({
    cat: api.cats.get.currentCat
  })
}
