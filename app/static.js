import http from 'http'

export function createServer (config) {
  const ecstatic = config.livereload ?
    require('ecstatic-lr') : require('ecstatic')

  return http.createServer(
    ecstatic(config.static)
  )
}
