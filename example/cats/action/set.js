const assign = require('object-assign')

module.exports = {
  create: (api) => ({
    update: (model, cat) => ({
      model: assign({}, model, {
        [cat.id]: cat
      })
    })
  })
}
