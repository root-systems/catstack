const { join } = require('path')
const Assets = require('catstack-assets')
const nest = require('depnest')

module.exports = {
  config: {
    needs: nest('config.cwd', 'first'),
    gives: nest({
      'config.assets': [
        'entryFile',
        'js'
      ]
    }),
    create: (api) => nest('config.assets', {
      entryFile: () => join(__dirname, '../browserEntry.js'),
      js: () => ({
        transform: [
          [ 'evalify', { files: ['**/service.js', '**/services/*.js'] } ],
          [ 'bulkify', { vars: { cwd: api.config.cwd(), process } } ],
          'es2040'
        ]
      })
    })
  },
  Assets
}
