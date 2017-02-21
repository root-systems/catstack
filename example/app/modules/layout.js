module.exports = {
  needs: { inu: { html: 'first' } },
  create: (api) => (model, dispatch) => {
    return (view) => api.inu.html`
      <div>
        <nav>
          <a href='/'>home</a>
          <a href=${`/cats`}>cats party!</a>
          <a href='/nope'>nope</a>
        </nav>
        ${view}
      </div>
    `
  }
}
