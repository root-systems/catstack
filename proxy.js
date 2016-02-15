const config = require('app/config')
const createServer = require('app/proxy').createServer
const Url = require('url')

const server = createServer(config)

server.listen(config.proxy.port, function () {
  console.log(`proxy server listening on port ${config.proxy.port}`)
})
