
const bulk = require('bulk-require')

module.exports = bulk(__dirname, [
  '!(index|modules).js',
  '!(types|bin|lib|browser|example|node_modules)/**/!(*.test).js',
])
console.log(module.exports)
