const Url = require('url')

const config = require('app/config')

module.exports = function () {
  this.Given(/^I am a user$/, function () {

  })

  this.When(/^I open a page$/, function (cb) {
    this.browser.visit('/', cb)
  })

  this.Then(/^it works$/, function () {
    this.browser.assert.success()
  })
}
