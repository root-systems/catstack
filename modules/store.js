module.exports = {
  inu: require('inu/modules'),
  // HACK placeholder until proper solution
  dispatch: {
    gives: { inu: { dispatch: true } },
    create: () => ({ inu: { dispatch: () => {} } })
  }
}
