module.exports = {
  needs: {
    'app.css.primaryColor': 'first'
  },
  create: (api) => {
    const Home = api.css.Element(
      'div',
      api.app.css.primaryColor
    )

    return () => Home({}, 'home')
  }
}
