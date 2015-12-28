require('babel-core/register')
require('css-modules-require-hook')

const createServer = require('app/server')
const config = require('app/config')

createServer(config)
