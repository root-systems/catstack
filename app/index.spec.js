import test from 'ava'

test("imports render service", (t) => {
  const createServer = require('app/render').createServer
  t.is(typeof createServer, 'function')
})
