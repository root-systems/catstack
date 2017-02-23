const onLoad = require('on-load')
const { get } = require('libnested')

module.exports = {
  needs: {
    'inu.html': 'first',
    'app.layouts.main': 'first',
    cats: {
      'actions.loadAll': 'first',
      'get.allProps': 'first',
      'elements.all': 'first'
    }
  },
  create: (api) => ({
    route: '/cats',
    layout: api.app.layouts.main,
    get: api.cats.get.allProps,
    view: (props, dispatch) => {
      const view = api.cats.elements.all(props.cats)

      return onLoad(view, handleLoad)

      function handleLoad (el) {
        dispatch(api.cats.actions.loadAll())
      }
    }
  })
}
