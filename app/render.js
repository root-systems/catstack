// https://github.com/jlongster/react-redux-universal-hot-example/blob/master/src/server.js

import http from 'http'
import Url from 'url'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import { Router, RouterContext, match, createMemoryHistory as createHistory  } from 'react-router'
import sendHtml from 'send-data/html'
import sendError from 'send-data/error'
import redirect from 'predirect'

import createStore from 'app/store'
import createRoutes from 'app/routes'
import fetchAllData from 'app/util/fetch-all-data'

export function createServer (config) {
  const staticUrl = Url.format(config.static.url)

  return http.createServer(render)
  
  function render (req, res) {
    const history = createHistory()
    const store = createStore(undefined, history)

    match({
      routes: createRoutes(store),
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
          const component = <Provider store={store}>
            <RouterContext { ...renderProps } />
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

