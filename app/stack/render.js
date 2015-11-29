// https://github.com/jlongster/react-redux-universal-hot-example/blob/master/src/server.js

const React = require('react')
const { renderToString } = require('react-dom/server')
const { Provider } = require('react-redux')
const { createHistory } = require('history')
const { Router, RoutingContext, match } = require('react-router')

const createStore = require('app/store')
const routes = require('app/routes')
const fetchAllData = require('app/util/fetch-all-data')

module.exports = createRender

function createRender (config) {
  return function render (req, res) {
    const store = createStore()

    match({
      routes: routes,
      location: req.path
    }, function (err, redirectLocation, renderProps) {
      if (redirectLocation) {
        res.redirect(redirectLocation.pathname + redirectLocation.search)
      } else if (err) {
        res.status(500).send(err.message)
      } else if (!renderProps) {
        res.status(404).send('Not found')
      } else {
        fetchAllData(
          renderProps.components,
          store.getState, store.dispatch,
          renderProps.location,
          renderProps.params
        ).then(function () {
          const component = <Provider store={store} key="provider">
            <RoutingContext { ...renderProps } />
          </Provider>

          const html = renderToString(component)

          const fullHtml = renderFullPage(html, store.getState())

          res.send(fullHtml)
        })
      }
    })
  }
}

function renderFullPage (html, data) {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <title>Production TodoMVC</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <main>${ html }</main>
        <script>
          window.__data = ${ JSON.stringify(data) }
        </script>
        <script src="bundle.js"></script>
      </body>
    </html>
  `
}
