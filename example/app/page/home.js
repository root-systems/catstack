module.exports = {
  needs: {
    'inu.html': 'first',
    'app.layout.main': 'first'
  },
  create: (api) => ({
    route: '/',
    layout: api.app.layout.main,
    view: (model, dispatch) => api.inu.html`
      <div>home!</div>  
    `
  })
}
