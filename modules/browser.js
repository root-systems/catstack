const bulk = require('bulk-require')
const Path = require('path')

module.exports = bulk(Path.join(__dirname, '..'), [
  '+(app|client|config|log|pull|service)/**/!(browser|*.test).js'
])
// HACK remove circular bulk require artifacts
delete module.exports.config.index
delete module.exports.service.index
delete module.exports.pull.index
delete module.exports.log.index
