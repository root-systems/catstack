const bulk = require('bulk-require')
import { map } from 'ramda'

export default {
  ...map(
    (module) => m.service.default,
    bulk(__dirname, '*/service.js')
  ),
  ...map(
    (module) => module.services.map(m => m.default),
    bulk(__dirname, '*/services/*.js')
  )
}
