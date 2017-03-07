if (typeof window === 'undefined') {
  window = require('global/window')
  document = require('global/document')
}

const nest = require('depnest')
const create = require('hyps/createElement')
const morphdom = require('morphdom')
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

function update (fromNode, toNode, opts = {}) {
  if (opts.events !== false) {
    if (!opts.onBeforeElUpdated) opts.onBeforeElUpdated = copier
  }

  return morphdom(fromNode, toNode, opts)
}

// morphdom only copies attributes. we decided we also wanted to copy events
// that can be set via attributes
// 
// inspiration from https://github.com/maxogden/yo-yo/blob/b4e1e8fe2e1081464c1fbdd1ad6c7a0ae7e24ad1/index.js
function copier (fromNode, toNode) {
  copyEvents(fromNode, toNode)
  copyValues(fromNode, toNode)
}

function copyEvents (fromNode, toNode) {
  const toEventHandlers = H.cacheElementEventHandlers.get(toNode)
  const fromEventHandlers = H.cacheElementEventHandlers.get(fromNode)

  // copy events:
  uniqueKeys(toEventHandlers, fromEventHandlers).forEach(name => {
    const toEventHandler = toEventHandlers[name]
    const fromEventHandler = fromEventHandlers[name]
    // if existing event handler does not match new event handler
    if (fromEventHandler !== toEventHandler) {
      // if existing event handler is defined
      if (fromEventHandler !== undefined) {
        // remove existing event handler
        fromNode.removeEventListener(name, fromEventHandler)
        delete fromEventHandlers[name]
      }
      // if new event handler is defined
      if (toEventHandler !== undefined) {
        // add new event handler
        fromNode.addEventListener(name, toEventHandler)
        fromEventHandlers[name] = toEventHandler
      }
    }
  })
}

function copyValues (fromNode, toNode) {
  var oldValue = fromNode.value
  var newValue = toNode.value
  // copy values for form elements
  if ((
    fromNode.nodeName === 'INPUT'
    && fromNode.type !== 'file'
  ) || fromNode.nodeName === 'SELECT') {
    if (!newValue) {
      toNode.value = fromNode.value
    } else if (newValue !== oldValue) {
      fromNode.value = newValue
    }
  } else if (fromNode.nodeName === 'TEXTAREA') {
    if (toNode.getAttribute('value') === null) fromNode.value = toNode.value
  }
}

// credit to paolo
// https://github.com/0x00A/TIL/blob/master/javascript/unique-arrays.md
function uniqueKeys (objA = {}, objB = {}) {
  return Array.from(new Set([
    ...Object.keys(objA),
    ...Object.keys(objB)
  ]))
}
