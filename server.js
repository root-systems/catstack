require('babel-core/register')

const createServer = require('app/server')
const config = require('app/config')

const server = createServer(config)

server.listen(process.env.PORT || 5000)
