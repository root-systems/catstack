module.exports = {
  proxy: {
    port: process.env.PORT || 80
  },
  render: {
    url: {
      protocol: 'http:',
      hostname: 'localhost',
      pathname: '/'
    },
    port: 6000
  },
  static: {
    url: {
      protocol: 'http:',
      hostname: 'localhost',
      pathname: '/static/'
    },
    port: 6001
  },
  api: {
    url: {
      protocol: 'http:',
      hostname: 'localhost',
      pathname: '/api/'
    },
    port: 6002
  },
  db: {
    client: 'pg',
    connection: {
      host     : 'localhost',
      user     : 'postgres',
      //password : 'postgres',
      database : 'postgres'
    }
  }
}
