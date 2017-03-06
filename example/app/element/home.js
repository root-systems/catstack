module.exports = {
  needs: {
    'html.hx': 'first',
    'app.css.primaryColor': 'first'
  },
  create: (api) => ({
    html: () => api.html.hx`
      <div>
        home!
      </div>
    `,
    css: api.app.css.primaryColor
  })
}
