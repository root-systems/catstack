require('babel-core/register')
require('css-modules-require-hook')

const config = require('app/config')
const createRender = require('app/render')
const Url = require('url')

const server = createRender(config)

server.listen(config.render.url.port, function () {
  const renderUrl = Url.format(config.render.url)
  console.log(`render server listening at ${renderUrl}`)
})
