const http = require('http')
const httpProxy = require('http-proxy')
const Url = require('url')
const startsWith = require('lodash').startsWith
const assign = require('lodash').assign
const redirect = require('predirect')

module.exports = { createServer }

function createServer (config) {
  const proxy = httpProxy.createProxyServer({
    ignorePath: true
  })

  proxy.on('error', function (err, req, res) {
    console.log(JSON.stringify({
      name: 'proxy',
      level: 'warn',
      url: req.url,
      message: err.message
    }))
    if (err.code === 'ECONNREFUSED') {
      // HACK delay request for one second
      setTimeout(function () {
        redirect(req, res, `http://localhost:${config.proxy.port}${req.url}`)
      }, 1000)
    } else {
      res.writeHead(500, { 'Content-Type': 'text/plain' })
      res.end('Internal Server Error')
    }
  })

  const server = http.createServer(function (req, res) {
    const url = Url.parse(req.url)

    if (matches(config.api, url.pathname)) {
      proxy.web(req, res, { target: targetUrl(config.api, url.pathname) })
    } else if (matches(config.static, url.pathname)) {
      proxy.web(req, res, { target: targetUrl(config.static, url.pathname) })
    } else {
      proxy.web(req, res, { target: targetUrl(config.render, url.pathname) })
    }
  })

  return server
}

function targetUrl (service, pathname) {
  const url = assign(
    {}, service.url,
    { port: service.port },
    { pathname: targetPath(service, pathname) }
  )
  return Url.format(url)
}

function targetPath (service, pathname) {
  return pathname.slice(service.url.pathname.length - 1)
}

function matches (service, pathname) {
  return startsWith(pathname, service.url.pathname)
}
