module.exports = {
  gives: {
    service: {
      handler: true,
      manifest: true,
      adapter: true
    }
  },
  create: () => ({
    service: {
      handler: () => {},
      manifest: () => ({}),
      adapter: () => ({})
    }
  })
}
