module.exports = {
  multi: require('inu/modules/multi'),
  html: require('./html'),
  // HACK placeholder until proper solution
  dispatch: {
    gives: { inu: { dispatch: true } },
    create: () => ({ inu: { dispatch: () => {} } })
  }
}
