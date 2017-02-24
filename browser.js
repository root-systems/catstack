const pull = require('pull-stream')
const { entry } = require('inu')
const { update } = require('yo-yo')
const start = require('inu-engine')

const app = require('./lib/app')

module.exports = startBrowser

function startBrowser () {
  const sockets = app()
  const store = entry(sockets)
  const { views, dispatch } = start(store)
  // HACK inject dispatch
  sockets.inu.dispatch.push(dispatch)
  const main = document.createElement('div')
  document.body.appendChild(main)
  pull(views(), pull.drain(update.bind(null, main)))
}
