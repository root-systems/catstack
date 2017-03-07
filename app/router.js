const nest = require('depnest')

module.exports = {
  router: require('inu-router').modules.router,
  routeNotFound: {
    gives: nest('inu.route'),
    needs: nest('html.hx', 'first'),
    create: (api) => nest('inu.route', () => [
      ['/404', (model) => {
        return api.html.hx`
          <div>page not found</div>
        `
      }]
    ])
  }
}
