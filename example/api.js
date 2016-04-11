require('babel-register')

const config = require('app/config')
const createServer = require('app/api').createServer
const Url = require('url')

const server = createServer(config)

server.listen(config.api.port, function () {
  const apiUrl = Url.format(config.api.url)
  console.log(`api server at ${apiUrl}`)
})
