require('babel-core/register')

const createServer = require('app/server')
const config = require('app/config')

createServer(config)
