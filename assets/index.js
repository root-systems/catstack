const Url = require('url')
const send = require('send')
const Accept = require('accepts')
const nest = require('depnest')

module.exports = {
  needs: nest({
    'config.all': 'first',
    assets: {
      'js': 'first',
      'html': 'first'
    }
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

        switch (accept.type(['image/*', 'html'])) {
          case 'image/*':
            return file(req, res, context, next)
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

    function file (req, res, context, next) {
      const { cwd: root } = api.config.all()
      const url = Url.parse(req.url)
      const path = url.pathname.substring(1)
      next(null, send(req, path, { root }))
    }
  }
}

