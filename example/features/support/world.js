const Browser = require('zombie')

const config = require('app/config')

Browser.localhost('localhost', config.proxy.port)

function World () {
  // this.browser will be available in step definitions 
  this.browser = new Browser()
}
 
module.exports = function () {
  this.World = World
}
