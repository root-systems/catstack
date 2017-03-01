const pull = require('pull-stream')

module.exports = {
  gives: 'pull',
  create: () => pull
}
