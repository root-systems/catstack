const http = require('http')
const httpProxy = require('http-proxy')
const Url = require('url')
const startsWith = require('lodash').startsWith
const assign = require('lodash').assign

const config = require('app/config')

const proxy = httpProxy.createProxyServer({
  ignorePath: true
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

server.listen(config.proxy.port, function () {
  console.log(`proxy server listening on port ${config.proxy.port}`)
})

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
