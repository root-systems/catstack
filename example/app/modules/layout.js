module.exports = {
  needs: { inu: { html: 'first' } },
  create: (api) => (model, dispatch) => {
    console.log('model', model)
    const html = api.inu.html
    return (view) => html`
      <div>
        <nav>
          <a href='/'>home</a>
          <a href=${`/cat/${randomId()}`}>a new cat!</a>
          <a href='/nope'>nope</a>
        </nav>
        ${view}
      </div>
    `
  }
}

function randomId () {
  return Math.random().toString(8).substring(2)
}
