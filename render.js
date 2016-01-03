require('babel-core/register')
require('css-modules-require-hook')

const config = require('app/config').default
const createRender = require('app/render').default
const Url = require('url')

const server = createRender(config)

server.listen(config.render.url.port, function () {
  const renderUrl = Url.format(config.render.url)
  console.log(`render server listening at ${renderUrl}`)
})
