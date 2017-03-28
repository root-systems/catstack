const nest = require('depnest')

module.exports = {
  gives: nest('app.theme'),
  create: (api) => {
    return nest('app.theme', theme)

    function theme (sofar = {}) {
      return sofar
    }
  }
}
