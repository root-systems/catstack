import Client from 'feathers-client'
import fetch from 'isomorphic-fetch'
import Url from 'url'

import config from 'app/config'

const apiUrl = Url.format(config.api.url)
const client = Client(apiUrl)
  .configure(Client.fetch(fetch))

export default client
