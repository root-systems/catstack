const { join } = require('path')

module.exports = {
  services: {
    static: {
      root: join(__dirname, 'assets')
    }
  }
}
