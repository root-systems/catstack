const join = require('path').join

module.exports = {
  db: {
    client: 'sqlite3',
    connection: {
      filename: join(__dirname, '..', 'db.sqlite')
    }
  }
}
