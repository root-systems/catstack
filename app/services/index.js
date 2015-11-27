const fs = require('fs')
const { map, filter, invoker, zip } = require('ramda')
const { join, basename } = require('path')

const serviceCreatorNames = filter(
  (name) => name !== 'index',
  map(
    basename,
    fs.readdirSync(__dirname)
  )
)

const serviceCreators = zip(
  serviceCreatorNames,
  map(
    (name) => {
      require(join(__dirname, name))
    },
    serviceCreatorNames
  )
)

module.exports = serviceCreators
