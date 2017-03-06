if (typeof window === 'undefined') {
  window = require('global/window')
  document = require('global/document')
}

const nest = require('depnest')
const create = require('hyps/h')
const update = require('morphdom')
const H = require('@skatejs/val')
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
      h: H(api.html.create),
      hx: Hx(api.html.h)
    })
  }
}
