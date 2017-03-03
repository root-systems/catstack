module.exports = {
  needs: {
    app: {
      layout: 'first',
      'element.home': 'first'
    }
  },
  create: (api) => ({
    route: '/',
    layout: api.app.layout,
    view: api.app.element.home
  })
}
