const { get } = require('libnested')

module.exports = {
  needs: {
    'app.layouts.main': 'first',
    cats: {
      'elements.one': 'first',
      'get.oneProps': 'first'
    }
  },
  create: (api) => ({
    route: '/cat/:catId',
    layout: api.app.layouts.main,
    get: api.cats.get.oneProps,
    view: (props, dispatch) => {
      return api.cats.elements.one(props.cat)
    }
  })
}
