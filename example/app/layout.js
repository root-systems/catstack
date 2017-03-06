module.exports = {
  needs: {
    'html.hx': 'first'
  },
  create: (api) => (view) => {
    return (model, dispatch) => api.html.hx`
      <div>
        <nav>
          <a href='/'>home</a>
          <a href=${`/cats`}>cats party!</a>
          <a href='/nope'>nope</a>
        </nav>
        ${view(model, dispatch)}
      </div>
    `
  }
}
