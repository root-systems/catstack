const { keys } = Object
const assign = require('object-assign')
const { pull } = require('../../')

module.exports = {
  needs: {
    'cats.module.data': 'first'
  },
  manifest: {
    all: 'source',
    get: 'async'
  },
  create: (api) => ({
    methods: {
      all: function () {
        const data = api.cats.module.data()
        const cats = keys(data)
          .map(id => assign({ id }, data[id]))
        return pull.values(cats)
      },
      get: function ({ id }, cb) {
        const data = api.cats.module.data()
        cb(null, assign({ id }, data[id]))
      }
    }
  })
}
