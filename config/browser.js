const nest = require('depnest')

module.exports = {
  gives: nest('config', [
    'all'
  ]),
  create: () => {
    return nest('config', {
      all: () => {}
    })
  }
}
