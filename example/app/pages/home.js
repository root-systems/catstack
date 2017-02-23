module.exports = {
  needs: {
    'inu.html': 'first',
    'app.layouts.main': 'first'
  },
  create: (api) => ({
    route: '/',
    layout: api.app.layouts.main,
    view: (model, dispatch) => api.inu.html`
      <div>home!</div>  
    `
  })
}
