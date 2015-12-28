const cuke = require('cuke-tap')
const path = require('path')
const glob = require('glob')
const parallel = require('run-parallel')

parallel([
  function (cb) {
    glob('@(features/*.feature|*/index.feature|*/features/*.feature)', cb)
  },
  function (cb) {
    glob('@(features/steps.js|*/steps.js|*/features/steps.js)', cb)
  }
], function (err, results) {
  if (err) { throw err }

  const features = results[0]
  const steps = results[1].map(function (file) {
    return require(file)
  })

  if (features.length > 0) {
    cuke(features, steps)
  }
})

