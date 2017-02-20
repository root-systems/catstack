const { get } = require('libnested')

module.exports = {
  needs: {
    inu: { html: 'first' },
    app: { modules: { layout: 'first' } },
    cats: { service: { get: 'first' } }
  },
  create: (api) => ({
    route: '/cat/:catId',
    view: (model, dispatch) => {

      api.cats.service.get({ id: 1 }, console.log.bind(console))

      return api.app.modules.layout(model, dispatch)(api.inu.html`
        <div>one cat: ${model.router.params.catId}!</div>  
      `)
    }
  })
}
