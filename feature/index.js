const cuke = require('cuke-tap')
const path = require('path')

const features = [ path.join(__dirname, '/feature.feature') ]
const steps = [ require('./steps') ]

cuke(features, steps)
