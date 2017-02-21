const { get } = require('libnested')

module.exports = {
  needs: {
    'inu.html': 'first',
    'app.modules.layout': 'first',
    cats: {
      'actions.loadAll': 'first',
      'get.allProps': 'first'
    }
  },
  create: (api) => ({
    route: '/cats',
    view: (model, dispatch) => {
      const layout = api.app.modules.layout(model, dispatch)
      const props = api.cats.get.allProps(model)
      const view = api.inu.html`
        <ul onload=${handleLoad}>
          ${props.cats.map(cat => api.inu.html`
            <li>
              <a href=${`/cat/${cat.id}`}>
                ${cat.name}
              </a>
            </li>
          `)}
        </ul>
      `

      return layout(view)

      function handleLoad (el) {
        dispatch(api.cats.actions.loadAll())
      }
    }
  })
}
