const values = require('object-values')
const { pull } = require('../../')

module.exports = {
  needs: {
    'cats.modules.data': 'first'
  },
  manifest: {
    all: 'source',
    get: 'async'
  },
  create: (api) => ({
    methods: {
      all: function () {
        const data = api.cats.modules.data()
        return pull.values(data)
      },
      get: function ({ id }, cb) {
        const data = api.cats.modules.data()
        cb(null, data[id])
      }
    }
  })
}
