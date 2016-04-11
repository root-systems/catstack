module.exports = {
  proxy: {
    port: 5050
  },
  render: {
    url: {
      protocol: 'http:',
      hostname: 'localhost',
      pathname: '/',
      port: 5050
    },
    port: 6050
  },
  static: {
    url: {
      protocol: 'http:',
      hostname: 'localhost',
      pathname: '/static/',
      port: 5050
    },
    port: 6051
  },
  api: {
    url: {
      protocol: 'http:',
      hostname: 'localhost',
      pathname: '/api/',
      port: 5050
    },
    port: 6052
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
