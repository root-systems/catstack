require('babel-core/register')

const config = require('app/config')
const createServer = require('app/static').createServer
const Url = require('url')

const server = createServer(config)

server.listen(config.static.port, function () {
  const staticUrl = Url.format(config.static.url)
  console.log(`static server at ${staticUrl}`)
})
