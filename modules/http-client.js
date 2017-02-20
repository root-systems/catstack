const configureClient = require('vas-http/Client')

module.exports = {
  needs: {
    config: {
      http: {
        serialize: 'first',
        baseUrl: 'first'
      }
    }
  },
  gives: {
    http: {
      Client: true
    },
    config: {
      http: {
        serialize: true,
        baseUrl: true
      }
    }
  },
  create: (api) => {
    var Client
    return {
      http: {
        Client: (service) => {
          if (!Client) {
            const config = api.config.http
            Client = configureClient({
              serialize: config.serialize(),
              baseUrl: config.baseUrl()
            })
          }
          return Client(service)
        }
      },
      config: {
        http: {
          serialize: () => {},
          baseUrl: () => {}
        }
      }
    }
  }
}
