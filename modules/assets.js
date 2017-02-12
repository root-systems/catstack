const { join } = require('path')
const Assets = require('catstack-assets')

module.exports = {
  config: {
    gives: {
      config: {
        assets: {
          entryFile: true,
          js: true
        }
      }
    },
    create: () => ({
      config: {
        assets: {
          entryFile: () => join(__dirname, '../browserEntry.js'),
          js: () => ({
            transform: [
              ['evalify', { files: ['**/service.js', '**/services/*.js'] } ],
              ['bulkify', { vars: { dirname: undefined, process  } } ],
              'es2040'
            ]
          })
        }
      }
    })
  },
  Assets
}
