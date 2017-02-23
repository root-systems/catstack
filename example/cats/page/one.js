const { get } = require('libnested')

module.exports = {
  needs: {
    'app.layout.main': 'first',
    cats: {
      'element.one': 'first',
      'get.oneProps': 'first'
    }
  },
  create: (api) => ({
    route: '/cat/:catId',
    layout: api.app.layout.main,
    get: api.cats.get.oneProps,
    view: (props, dispatch) => {
      return api.cats.element.one(props.cat)
    }
  })
}
