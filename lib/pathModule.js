const { join, basename, dirname, extname, sep } = require('path')
const assign = require('object-assign')

module.exports = (definition, { filename }) => {
  const path = join(
    dirname(filename),
    basename(filename, extname(filename))
  ).split(sep)

  return assign({ path }, definition)
}
