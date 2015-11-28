const { join } = require('path')

const configDir = join(__dirname, '..', 'config')
const nodeEnv = process.env.NODE_ENV || 'development'

const defaults = require(join(configDir, 'defaults'))
const envConfig = require(join(configDir, nodeEnv))

const config = {
  ...defaults,
  ...envConfig
}

module.exports = config
