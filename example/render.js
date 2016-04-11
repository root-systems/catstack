require('css-modules-require-hook')({})
require('babel-register')

const config = require('app/config')
const createServer = require('app/render').createServer
const Url = require('url')

const server = createServer(config)

server.listen(config.render.port, function () {
  const renderUrl = Url.format(config.render.url)
  console.log(`render server at ${renderUrl}`)
})
