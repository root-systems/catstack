const { get } = require('libnested')

module.exports = {
  needs: {
    'inu.html': 'first',
    'app.modules.layout': 'first',
    'cats.get.oneProps': 'first'
  },
  create: (api) => ({
    route: '/cat/:catId',
    view: (model, dispatch) => {
      const layout = api.app.modules.layout(model, dispatch)
      const props = api.cats.get.oneProps(model)
      const view = api.inu.html`
        <h1>${props.cat.name}!</h1>  
      `
      return layout(view)
    }
  })
}
