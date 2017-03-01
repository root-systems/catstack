const { assign } = Object
const Html = require('create-html')
const nest = require('depnest')

module.exports = {
  needs: nest('config.assets.html', 'reduce'),
  gives: nest([
    'config.assets.html',
    'assets.html'
  ]),
  create: (api) => nest({
    'config.assets.html': (sofar) => assign({}, sofar, {
      script: 'bundle.js',
      head: `
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <base href="/">
      `
    }),
    'assets.html': () => Html(api.config.assets.html())
  })
}
