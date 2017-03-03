module.exports = {
  needs: {
    'app.styles': 'reduce'
  },
  create: (api) => (props) => ({
    color: api.app.styles().colors.primary
  })
}
