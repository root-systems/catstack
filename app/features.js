const cuke = require('cuke-tap')
const path = require('path')
const glob = require('glob')
const join = require('path').join
const parallel = require('run-parallel')

parallel([
  function (cb) {
    glob('{features/*.feature,*/index.feature,*/features/*.feature}', { cwd: __dirname }, cb)
  },
  function (cb) {
    glob('{steps/*.js,*/steps.js,*/steps/*.js}', { cwd: __dirname }, cb)
  }
], function (err, results) {
  if (err) { throw err }

  const features = results[0].map(function (file) {
    return join(__dirname, file)
  })
  const steps = results[1].map(function (file) {
    return require(join(__dirname, file))
  })

  console.log("features", features)
  console.log("steps", steps)

  if (features.length > 0) {
    cuke(features, steps)
  }
})
