module.exports = {
  needs: {
    'html.create': 'first'
  },
  create: (api) => (view) => {
    return (model, dispatch) => api.html.create`
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
