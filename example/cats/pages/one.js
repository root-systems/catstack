const { get } = require('libnested')

module.exports = {
  needs: {
    inu: { html: 'first' },
    app: { modules: { layout: 'first' } }
  },
  create: (api) => ({
    route: '/cat/:catId',
    view: (model, dispatch) => api.app.modules.layout(model, dispatch)(api.inu.html`
      <div>one cat: ${model.router.params.catId}!</div>  
    `)
  })
}
