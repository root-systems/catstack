import feathers from 'feathers-client'
import fetch from 'isomorphic-fetch'
import Url from 'url'

import config from 'app/config'

const clientUrl = Url.format(config.api.url)
const client = feathers(clientUrl)
  .configure(feathers.fetch(fetch))

export default client
