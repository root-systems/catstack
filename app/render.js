// https://github.com/jlongster/react-redux-universal-hot-example/blob/master/src/server.js

const http =require('http')
const Url = require('url')
const React = require('react')
const { renderToString } = require('react-dom/server')
const { Provider } = require('react-redux')
const { createHistory } = require('history')
const { Router, RoutingContext, match } = require('react-router')
const sendHtml = require('send-data/html')
const sendError = require('send-data/error')
const redirect = require('predirect')

const createStore = require('app/store')
const routes = require('app/routes')
const fetchAllData = require('app/util/fetch-all-data')

module.exports = createRender

function createRender (config) {
  const staticUrl = Url.format(config.static.url)

  return http.createServer(render)
  
  function render (req, res) {
    const store = createStore()

    match({
      routes: routes,
      location: req.url
    }, function (err, redirectLocation, renderProps) {
      if (redirectLocation) {
        redirect(req, res, redirectLocation.pathname + redirectLocation.search)
      } else if (err) {
        sendError(req, res, { body: err })
      } else if (!renderProps) {
        sendError(req, res, {
          statusCode: 404,
          body: new Error('Not found')
        })
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

          var innerHtml
          try {
            innerHtml = renderToString(component)
          } catch (err) {
            return sendError(req, res, { body: err })
          }

          const html = renderFullPage(innerHtml, store.getState(), config)

          sendHtml(req, res, html)
        })
      }
    })
  }

  function renderFullPage (innerHtml, initialData) {
    return `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <title>Craftworks TodoMVC</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </head>
        <body>
          <main>${ innerHtml }</main>
          <script>
            window.__data = ${ JSON.stringify(initialData) }
          </script>
          <script src="${Url.resolve(staticUrl, 'bundle.js')}"></script>
        </body>
      </html>
    `
  }
}

