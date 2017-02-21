const values = require('object-values')

module.exports = {
  needs: {
    'cats.get.catsById': 'first'
  },
  create: (api) => [
    api.cats.get.catsById,
    (catsById) => values(catsById)
  ]
}
