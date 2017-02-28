
const bulk = require('bulk-require')

module.exports = bulk(__dirname, [
  '!(index|modules|bin|server|browser|browserEntry).js',
  '!(types|config|lib|example|node_modules)/**/!(*.test).js'
])
