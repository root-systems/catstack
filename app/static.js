import http from 'http'

export default module.exports = function createStatic (config) {
  const ecstatic = config.livereload ?
    require('ecstatic-lr') : require('ecstatic')

  return http.createServer(
    ecstatic(config.static)
  )
}
