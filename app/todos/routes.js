const React = require('react')
const { Route } = require('react-router')

const TodosContainer = require('./container')

module.exports = <Route path="todos" component={TodosContainer} />
