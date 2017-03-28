const onLoad = require('on-load')

module.exports = {
  needs: {
    'inu.dispatch': 'first',
    'app.layout': 'first',
    cats: {
      'action.loadAll': 'first',
      'get.allProps': 'first',
      'element.all': 'first'
    }
  },
  create: (api) => ({
    route: '/cats',
    layout: api.app.layout,
    get: api.cats.get.allProps,
    view: ({ cats }) => {
      const view = api.cats.element.all({ cats })

      return onLoad(view, handleLoad)

      function handleLoad (el) {
        api.inu.dispatch(api.cats.action.loadAll())
      }
    }
  })
}
