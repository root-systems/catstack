module.exports = {
  needs: {
    'html.create': 'first',
    'css.renderRule': 'first',
    'app.css.primaryColor': 'first'
  },
  create: (api) => () => {
    const className = api.css.renderRule(api.app.css.primaryColor)
    return api.html.create`
      <div className=${className}>
        home!
      </div>  
    `
  }
}
