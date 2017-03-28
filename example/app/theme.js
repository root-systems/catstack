const deepAssign = require('object-assign')

module.exports = {
  create: () => (sofar = {}) => {
    return deepAssign({}, sofar, {
      colors: {
        primary: 'green',
        accent: 'purple'
      }
    })
  }
}
