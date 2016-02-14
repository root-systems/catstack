const join = require('path').join

module.exports = {
  render: {
    url: {
      protocol: 'http:',
      hostname: 'localhost',
      port: 5000
    },
    port: 5000
  },
  static: {
    url: {
      protocol: 'http:',
      hostname: 'localhost',
      port: 5001
    },
    root: join(__dirname, '..', 'build'),
    port: 5001
  },
  api: {
    url: {
      protocol: 'http:',
      hostname: 'localhost',
      port: 5002
    },
    port: 5002
  },
  db: {
    client: 'pg',
    connection: {
      host     : 'localhost',
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
