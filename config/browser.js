const nest = require('depnest')

module.exports = {
  gives: nest('config', [
    'cwd',
    'args'
  ]),
  create: () => {
    return nest('config', {
      cwd,
      args
    })

    function args () {}

    function cwd () {}
  }
}
