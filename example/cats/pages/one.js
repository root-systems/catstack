const { get } = require('libnested')

module.exports = {
  needs: {
    'inu.html': 'first',
    'app.layouts.main': 'first',
    'cats.get.oneProps': 'first'
  },
  create: (api) => ({
    route: '/cat/:catId',
    layout: api.app.layouts.main,
    get: api.cats.get.oneProps,
    view: (props, dispatch) => api.inu.html`
      <h1>${props.cat ? props.cat.name : ''}!</h1>  
    `
  })
}
