const join = require('path').join

module.exports = {
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
