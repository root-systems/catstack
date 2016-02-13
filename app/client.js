import Client from 'feathers/client'
import Rest from 'feathers-rest/client'
import fetch from 'isomorphic-fetch'
import Url from 'url'

import config from 'app/config'

const apiUrl = Url.format(config.api.url)
const client = Client()
  .configure(Rest(apiUrl).fetch(fetch))

export default client
