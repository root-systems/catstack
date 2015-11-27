const test = require('cuke-tap')
const jsdom = require('jsdom')

test.given(/^I am on the landing page$/, (t, world, params) => {
  t.plan(1)
  jsdom.env('http://localhost:9966', (err, window) => {
    t.error(err)
    world.window = window
    t.pass('done')
  })
})
