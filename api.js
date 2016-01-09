require('babel-core/register')

const config = require('app/config')
const createServer = require('app/api').createServer
const Url = require('url')

const server = createServer(config)

server.listen(config.api.url.port, function () {
  const apiUrl = Url.format(config.api.url)
  console.log(`api server listening at ${apiUrl}`)
})
