const test = require('tape')
const { join } = require('path')

const readModules = require('./readModules')

test('reads modules', t => {
  readModules({
    dirname: join(__dirname, '../example'),
    types: {
      Page: {
        transform: (module) => {
          t.ok(module)
          console.log('module', module)
          return {
            gives: module.path.join('/'),
            create: () => () => module
          }
        },
        glob: '**/pages/*.js'
      }
    }
  }, (err, modules) => {
    t.error(err)
    console.log('modules', modules)
    t.ok(modules)
    t.end()
  })
})
