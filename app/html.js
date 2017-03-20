const { keys } = Object
const nest = require('depnest')
const { create, update } = require('hyps')
const Hx = require('hyperx')

module.exports = {
  gives: nest('html', [
    'create',
    'update',
    'h',
    'hx',
  ]),
  needs: nest('html', {
    'create': 'first',
    'h': 'first'
  }),
  create: (api) => {
    return nest('html', {
      create,
      update,
      h: api.html.create,
      hx: Hx((tagName, properties, children) => {
        return api.html.h(tagName, hSugarProperties(properties), children)
      })
    })
  }
}

function hSugarProperties (sugarProperties) {
  var events = {}
  var attributes = {}
  var properties = { events, attributes }
  keys(sugarProperties).forEach(key => {
    const value = sugarProperties[key]
    if (key.substring(0, 3) === 'ev-') {
      events[key.substring(3)] = value
    } else if (key.substring(0, 5) === 'attr-') {
      attributes[key.substring(5)] = value
    }
    properties[key] = value
  })
  return properties
}
