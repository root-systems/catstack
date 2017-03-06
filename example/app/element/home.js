module.exports = {
  needs: {
    'html.hx': 'first',
    'css.renderRule': 'first',
    'app.css.primaryColor': 'first'
  },
  create: (api) => () => {
    const className = api.css.renderRule(api.app.css.primaryColor)
    return api.html.hx`
      <div className=${className}>
        home!
      </div>  
    `
  }
}
