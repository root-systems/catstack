const pull = require('pull-stream')
const combine = require('depject')
const { entry } = require('inu')
const start = require('inu-engine')

const configModule = require('./config')
const appModules = require('./lib/app')
const coreModules = require('./modules')

// TODO this should be a depject module,
// but first need to refactor this inu
// code to work as such, using something
// like: https://github.com/depject/depject/issues/26

module.exports = startBrowser

function startBrowser () {
  const sockets = combine(
    configModule,
    appModules(),
    coreModules
  )

  const cssRender = sockets.css.render[0]
  const htmlUpdate = sockets.html.update[0]

  const styles = document.createElement('style')
  document.head.appendChild(styles)
  console.log('sockets', sockets)
  cssRender(styles)

  const store = entry(sockets)
  const { views, dispatch } = start(store)

  // HACK inject dispatch
  sockets.inu.dispatch.push(dispatch)

  const main = document.createElement('div')
  document.body.appendChild(main)

  pull(views(), pull.drain(htmlUpdate.bind(null, main)))
}
