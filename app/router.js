const nest = require('depnest')

module.exports = {
  router: require('inu-router').modules.router,
  routeNotFound: {
    gives: nest('inu.route'),
    needs: nest('html.create', 'first'),
    create: (api) => nest('inu.route', () => [
      ['/404', (model) => {
        return api.html.create`
          <div>page not found</div>
        `
      }]
    ])
  }
}
