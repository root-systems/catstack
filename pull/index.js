const assign = require('object-assign')
const { map } = require('libnested')
const nest = require('depnest')

const pull = assign(
  { pipe: require('pull-stream/pull') },
  require('pull-stream/sources'),
  require('pull-stream/throughs'),
  // sinks in pull-stream@3 don't work
  // with depject because they return nothing.
  // require('pull-stream/sinks'),
  { drain: require('pull-drain') }
)

module.exports = {
  gives: nest('pull', map(pull, () => true)),
  create: () => nest('pull', pull)
}
