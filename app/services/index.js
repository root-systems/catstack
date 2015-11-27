var fs = require('fs')
var { filter } = require('rambda')

filter(
  fs.readdirSync(__dirname),
  (name) => name.endsWith('index.js')
)
