module.exports = {
  needs: ['app.element', {
    Main: 'first',
    Nav: 'first',
    Link: 'first'
  }],
  create: (api) => (view) => {
    const { Main, Nav, Link } = api.app.element

    return (model, dispatch) => Main([
      Nav([
        Link({ href: '/' }, 'home'),
        Link({ href: '/cats' }, 'cat stack!'),
        Link({ href: '/nope' }, 'nope')
      ]),
      view(model, dispatch)
    ])
  }
}
