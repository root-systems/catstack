module.exports = {
  needs: {
    'app.layout': 'first',
    cats: {
      'element.one': 'first',
      'get.oneProps': 'first'
    }
  },
  create: (api) => ({
    route: '/cats/:catId',
    layout: api.app.layout,
    get: api.cats.get.oneProps,
    view: ({ cat }) => {
      return api.cats.element.one({ cat })
    }
  })
}
