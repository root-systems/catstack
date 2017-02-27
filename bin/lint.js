module.exports = {
  name: 'lint',
  options: [{
    name: 'fix',
    boolean: true,
    help: 'automatically fix problems'
  }, {
    name: 'verbose',
    boolean: true,
    help: 'show rule names for errors (to ignore specific rules)'
  }],
  command: (args) => {
    const lintOptions = require('standard/options')
    const lint = require('standard-engine').cli

    process.argv.splice(2, 1)
    lint(lintOptions)
  }
}
