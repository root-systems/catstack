const { join } = require('path')
const assets = require('vas-assets')

module.exports = {
  config: {
    gives: {
      config: {
        vas: {
          assets: {
            entryFile: true,
            js: true
          }
        }
      }
    },
    create: () => ({
      config: {
        vas: {
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
      }
    })
  },
  assets
}
