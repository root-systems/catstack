const execSync = require('child_process').execSync
const join = require('path').join

module.exports = {
  proxy: {
    port: 5000
  },
  render: {
    url: {
      protocol: 'http:',
      hostname: 'localhost',
      pathname: '/',
      port: 5000
    },
    port: 6000
  },
  static: {
    url: {
      protocol: 'http:',
      hostname: 'localhost',
      pathname: '/static/',
      port: 5000
    },
    root: join(__dirname, '..', 'build'),
    port: 6001
  },
  api: {
    url: {
      protocol: 'http:',
      hostname: 'localhost',
      pathname: '/api/',
      port: 5000
    },
    port: 6002
  },
  db: {
    client: 'pg',
    connection: {
      host     : process.platform === 'darwin' ? execSync('docker-machine ip default').toString().trim() : 'localhost',
      user     : 'postgres',
      //password : 'postgres',
      database : 'postgres'
    },
    pool: {
      min: 0,
      max: 1
    }
  }
}
