const Browser = require('zombie')

const config = require('app/config')

Browser.localhost(config.render.url.hostname, config.render.url.port)

function World () {
  // this.browser will be available in step definitions 
  this.browser = new Browser()
}
 
module.exports = function () {
  this.World = World
}
