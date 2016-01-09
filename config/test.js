const join = require('path').join
const env = process.env
const nodeEnv = env.NODE_ENV

module.exports = {
  render: {
    url: {
      port: 6000
    }
  },
  static: {
    url: {
      port: 6001
    }
  },
  api: {
    url: {
      port: 6002
    }
  }
}
