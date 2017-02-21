module.exports = {
  needs: {
    'cats.get.catsById': 'first',
    'cats.get.currentCatId': 'first'
  },
  create: (api) => [
    api.cats.get.catsById,
    api.cats.get.currentCatId,
    (catsById, currentCatId) => catsById[currentCatId]
  ]
}
