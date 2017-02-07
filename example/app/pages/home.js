module.exports = {
  needs: {
    inu: { html: 'first' },
    app: { modules: { layout: 'first' } }
  },
  create: (api) => ({
    route: '/',
    view: (model, dispatch) => api.app.modules.layout(model, dispatch)(api.inu.html`
      <div>home!</div>  
    `)
  })
}
