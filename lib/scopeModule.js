const { basename, dirname, sep } = require('path')
const assign = require('object-assign')

module.exports = (definition, { filename }) => {
  const scope = dirname(filename).split(sep).slice(0, 1)

  return assign({}, definition, {
    create: (api) => assign({
      scope
    }, definition.create(api))
  })
}
