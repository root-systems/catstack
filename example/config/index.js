const join = require('path').join
const env = process.env
const nodeEnv = env.NODE_ENV

module.exports = {
  render: {
  },
  static: {
    root: join(__dirname, '..', 'build')
  },
  api: {
  }
}
