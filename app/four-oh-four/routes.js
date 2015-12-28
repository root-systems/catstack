const React = require('react')
const { Route } = require('react-router')

const FourOhFourContainer = require('./container')

module.exports = <Route path="*" component={FourOhFourContainer} />
