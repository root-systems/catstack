require('babel-core/register')

const config = require('app/config')
const createApi = require('app/api')
const Url = require('url')

const server = createApi(config)

server.listen(config.api.url.port, function () {
  const apiUrl = Url.format(config.api.url)
  console.log(`api server listening at ${apiUrl}`)
})
