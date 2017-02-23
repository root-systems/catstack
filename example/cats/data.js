const randomCatName = require('cat-names').random

module.exports = {
  create: () => {
    var cats = {}
    for (var id = 1; id < 10; id++) {
      cats[id] = {
        name: randomCatName()
      }
    }
    return () => cats
  }
}
