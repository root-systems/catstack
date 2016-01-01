const { join } = require('path')
const env = process.env
const nodeEnv = env.NODE_ENV

module.exports = {
  static: {
    root: join(__dirname, '..', 'build')
  },
  port: env.PORT || 5000
}
