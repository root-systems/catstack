const { get } = require('libnested')

module.exports = {
  needs: {
    'inu.html': 'first',
    'app.layouts.main': 'first',
    cats: {
      'actions.loadAll': 'first',
      'get.allProps': 'first'
    }
  },
  create: (api) => ({
    route: '/cats',
    layout: api.app.layouts.main,
    get: api.cats.get.allProps,
    view: (props, dispatch) => {
      return api.inu.html`
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

      function handleLoad (el) {
        dispatch(api.cats.actions.loadAll())
      }
    }
  })
}
