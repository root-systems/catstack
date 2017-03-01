const bulk = require('bulk-require')
const Path = require('path')

module.exports = bulk(Path.join(__dirname, '..'), [
  '+(app|cli|client|config|log|pull|service|server)/**/!(browser|*.test).js'
], { index: false })
