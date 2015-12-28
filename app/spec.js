const ava = require('ava/api')
const glob = require('glob')

glob('{spec/*.js,*/spec.js,*/spec/*.js}', { cwd: __dirname }, function (err, files) {
  if (err) { throw err }

  if (files.length > 0) {
    ava(files).run()
  }
})
