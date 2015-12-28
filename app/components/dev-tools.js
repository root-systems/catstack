const React = require('react')
const { createDevTools } = require('redux-devtools')
const LogMonitor = require('redux-devtools-log-monitor').default
const DockMonitor = require('redux-devtools-dock-monitor').default

const DevTools = createDevTools(
  <DockMonitor toggleVisibilityKey='H'
               changePositionKey='Q'>
    <LogMonitor />
  </DockMonitor>
)

module.exports = DevTools
