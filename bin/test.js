const deglob = require('deglob')
const test = require('pull-test/cli')

const defaultGlob = '**/*.test.js'

module.exports = {
  name: 'test',
  options: [{}],
  command: (args) => {
    const { cwd } = args
    const paths = args._
    if (paths.length === 0) {
      deglob(defaultGlob, { cwd }, (err, paths) => {
        if (err) throw err
        test({ cwd, paths })
      })
    } else {
      test({ cwd, paths })
    }
  }
}
