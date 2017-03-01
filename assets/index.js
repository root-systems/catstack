const Accept = require('accepts')
const nest = require('depnest')

module.exports = {
  needs: nest('assets', {
    'js': 'first',
    'html': 'first'
  }),
  gives: nest('http.handler'),
  create: (api) => {
    return nest('http.handler', handler)

    function handler () {
      return (req, res, context, next) => {
        const accept = Accept(req)

        switch (context.url.pathname) {
          case '/':
            return html(req, res, context, next)
          case '/bundle.js':
            return js(req, res, context, next)
        }

        switch (accept.type(['html'])) {
          case 'html':
            return html(req, res, context, next)
        }

        return next(null)
      }
    }

    function js (req, res, context, next) {
      res.setHeader('Content-Type', 'application/js')
      next(null, api.assets.js())
    }

    function html (req, res, context, next) {
      res.setHeader('Content-Type', 'text/html')
      next(null, api.assets.html())
    }
  }
}
