const onLoad = require('on-load')
const { get } = require('libnested')

module.exports = {
  needs: {
    'inu.html': 'first',
    'app.layout.main': 'first',
    cats: {
      'action.loadAll': 'first',
      'get.allProps': 'first',
      'element.all': 'first'
    }
  },
  create: (api) => ({
    route: '/cats',
    layout: api.app.layout.main,
    get: api.cats.get.allProps,
    view: (props, dispatch) => {
      const view = api.cats.element.all(props.cats)

      return onLoad(view, handleLoad)

      function handleLoad (el) {
        dispatch(api.cats.action.loadAll())
      }
    }
  })
}
