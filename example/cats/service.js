const { keys } = Object
const assign = require('object-assign')

module.exports = {
  needs: {
    'pull.values': 'first',
    'cats.data': 'first'
  },
  manifest: {
    all: 'source',
    get: 'async'
  },
  create: (api) => ({
    methods: {
      all: function () {
        const data = api.cats.data()
        const cats = keys(data)
          .map(id => assign({ id }, data[id]))
        return api.pull.values(cats)
      },
      get: function ({ id }, cb) {
        const data = api.cats.data()
        cb(null, assign({ id }, data[id]))
      }
    }
  })
}
