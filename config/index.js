const join = require('path').join
const env = process.env
const nodeEnv = env.NODE_ENV

module.exports = {
  render: {
    url: {
      protocol: 'http:',
      hostname: 'localhost',
      port: 5000
    }
  },
  static: {
    url: {
      protocol: 'http:',
      hostname: 'localhost',
      port: 5001
    },
    root: join(__dirname, '..', 'build')
  },
  api: {
    url: {
      protocol: 'http:',
      hostname: 'localhost',
      port: 5002
    }
  }
}
