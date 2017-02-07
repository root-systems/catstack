const bulk = require('bulk-require')

const modules = bulk(process.cwd(), ['modules/*.js'])

console.log(modules)
