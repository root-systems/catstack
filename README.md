# business-stack

** work in progress **

real-world, production-quality stack for [Craftworks](http://craftworks.enspiral.com)

## resources

- [thinking in react](https://facebook.github.io/react/docs/thinking-in-react.html)
- [simplest redux example](https://github.com/jackielii/simplest-redux-example/blob/master/index.js)
- [smart and dumb components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)
- [css modules](http://glenmaddern.com/articles/css-modules)
- [mixins are dead, long live higher-order components](https://medium.com/@dan_abramov/mixins-are-dead-long-live-higher-order-components-94a0d2f9e750)
- [react on es6+](http://babeljs.io/blog/2015/06/07/react-on-es6-plus/)
- [how to use classes and sleep at night](https://medium.com/@dan_abramov/how-to-use-classes-and-sleep-at-night-9af8de78ccb4)
- [common react mistakes: unneeded state](http://reactkungfu.com/2015/09/common-react-dot-js-mistakes-unneeded-state/)
- [promise cookbook](https://github.com/mattdesl/promise-cookbook)
- [approaches to testing react components](http://reactkungfu.com/2015/07/approaches-to-testing-react-components-an-overview/)
- [unit testing react components without a dom](http://simonsmith.io/unit-testing-react-components-without-a-dom/)


## stack

- node version manager: [`nvm`](https://github.com/creationix/nvm)
  - when in this directory run `nvm use` which will use the version of `node` specified in [our .nvmrc](./.nvmrc).
- package manager: [`npm@3`](https://www.npmjs.com/)
  - install with `npm install -g npm@3`
  - to install a package, run `npm install --save my-favorite-package`
- task runner: [npm scripts](http://substack.net/task_automation_with_npm_run)
- browser bundler: [browserify](https://github.com/substack/browserify-handbook)
- es6/jsx transpiler: [babel](babeljs.io/) ([babel-require-hook](https://www.npmjs.com/package/babel-require-hook) and [babelify](https://www.npmjs.com/package/babelify))
- modular css: [css modules](http://glenmaddern.com/articles/css-modules) ([css-modules-require-hook](https://www.npmjs.com/package/css-modules-require-hook) and [cssify](https://www.npmjs.com/package/cssify))
- bulk require: [bulk-require](https://www.npmjs.com/package/bulk-require) and [bulkify](https://www.npmjs.com/package/bulkify)
- configuration: [simple-rc](https://www.npmjs.com/package/simple-rc) and [evalify](https://www.npmjs.com/package/evalify)
- utility functions: [lodash](https://lodash.com/docs/)
- data model: [tcomb](https://github.com/gcanti/tcomb)
- database: [knex](https://www.npmjs.com/package/knex)
- api service: [feathers-knex](https://www.npmjs.com/package/feathers-knex)
- api validator: [feathers-tcomb](https://www.npmjs.com/package/feathers-tcomb)
- TODO api authentication: [feathers-authentication](https://www.npmjs.org/package/feathers-authentication)
- api transport: [feathers-rest](https://www.npmjs.com/package/feathers-rest)
- client transport: [isomorphic-fetch](https://www.npmjs.com/package/isomorphic-fetch)
- client: [feathers-client](https://www.npmjs.com/package/feathers-client)
- render action { creators, reducers }: [feathers-action](https://www.npmjs.com/package/feathers-action)
- render action store: [redux](https://www.npmjs.com/package/redux)
- render getters: [reselect](https://www.npmjs.com/package/reselect)
- render router: [redux-router](https://www.npmjs.com/package/redux-router)
- render views: [react](https://www.npmjs.com/package/react)
- render forms: [tcomb-form](https://github.com/gcanti/tcomb-form)
- test specs: [ava](https://www.npmjs.com/package/ava)
- test features: [cucumber](https://www.npmjs.com/package/cucumber)
- test browser: [zombie](http://zombie.js.org/)
- TODO generators: [plop](https://github.com/amwmedia/plop)

## scripts

- [install](#install)
- [start](#start)
- [test](#test)
- [lint](#lint)
- [format](#format)
- [shrinkwrap](#shrinkwrap)
- [webpack-rails](#webpack-rails)

### install

```shell
npm install
```

### dev

starts development environment

```shell
npm run dev
```

### prod

starts production environment

```shell
npm run prod
```

### test

runs tests

```shell
npm test
```

#### test:spec

runs [ava](https://www.npmjs.com/package/ava) tests

can optionally take a [glob](https://www.npmjs.com/package/glob)

```shell
npm run test:spec -- './app/todos/**/*.spec.js'
```

default glob is `./app/**/*.spec.js`

#### test:feature

runs [cucumber](https://www.npmjs.com/package/cucumber) tests

can optionally take a [glob](https://www.npmjs.com/package/glob)

```shell
npm run test:feature -- './features/todo.feature`
```

default glob is `./features/**/*.feature`

### lint

checks for [standard style](http://standardjs.com)

can optionally take a [glob](https://www.npmjs.com/package/glob)

```shell
npm run lint -- './app/todos/**/*.js'
```

default glob is `./**/*.js` ignoring `node_modules`

### format

converts to [standard](http://standardjs.com) if possible

can optionally take a [glob](https://www.npmjs.com/package/glob)

```shell
npm run format -- './app/**/*.js'
```

default glob is `./**/*.js` ignoring `node_modules`

### database

#### pg

to run a local postgres db with [`docker`](https://docs.docker.com/) installed,

- to install db, run `npm run pg:pull`
- to create db, run `npm run pg:run`
- to start db, run `npm run pg:start`
- to stop db, run `npm run pg:stop`
- to remove db, run `npm run pg:rm`
- to show db logs, run `npm run pg:logs`

#### knex

run [any `knex` command](http://knexjs.org/#Migrations-CLI) with `npm run knex -- [command] [args]`

for example, run latest sql migrations with

```shell
npm run knex -- migrate:latest
```

and generate new sql migration with

```shell
npm run knex -- migrate:make add_some_columns_and_stuff
```

## directory structure

- `/config/`
  - `/config/index.js`
  - `/config/${ NODE_ENV }.js`
- `/app/${ module }/`
  - symlink `/app` to `/node_modules/app`
  - only do relative requires (`require('./models')`) if within module
  - otherwise, always require top-down (`require('app/things/models')`).
- `/feature/`
  - `/feature/support/world.js`
  - `/feature/support/hooks.js`
  - `/feature/step_definitions/steps.js`
  - `/feature/smoke.feature`
- spec tests are any files that end in `.spec.js`

### app entry points

our server code is run as separate processes, namely:

- `static`: static file server using [`http`](https://nodejs.org/api/http.html) and [`ecstatic`](https://www.npmjs.com/package/ecstatic)
- `api`: RESTful HTTP interface to data using [`feathers`](http://feathersjs.com) and [`connect` middleware](https://github.com/senchalabs/connect#readme)
- `render`: server-side rendering using [`http`](https://nodejs.org/api/http.html), [`react-dom/server`](https://www.npmjs.com/package/react-dom), [`feathers-client`](https://www.npmjs.com/package/feathers-client), and more...

our client code for `render` is bundled using [`browserify`](http://browserify.org), which similar to the server `render` process also uses [`react-dom`](https://www.npmjs.com/package/react-dom), [`feathers-client`](https://www.npmjs.com/package/feathers-client), and more...

each server process has a separate url available to other entry points via the [./config](./config)

### app modules

in contrast to frameworks like Rails which split our `app` into directories for each "type" of file (models, views, controllers), our `app` is split into directories for each module, where each module contains the various types of files *within* that module.

each module directory may contain any of:

- `index.js`: exports all the below exports from the module
- `models.js`: exports [`tcomb`](https://www.npmjs.com/package/tcomb) models
- `constants.js`: exports constants (such as [redux action types](https://www.npmjs.com/package/create-action-types))
- `actions.js`: exports [redux actions](https://www.npmjs.com/package/redux-actions) (recommended to use [`feathers-action`](https://npmjs.com/package/feathers-action))
- `reducer.js`: exports [redux reducer](http://redux.js.org/docs/basics/Reducers.html) (recommended to use [`feathers-action`](https://npmjs.com/package/feathers-action))
- `routes.js`: exports [`function (store) { return <ReactRouter.Route /> }`](https://www.npmjs.com/package/react-router)
- `getters.js`: exports [`reselect`](https://www.npmjs.com/package/reselect) getters for use in containers' `connect`
- `containers/*.js`: exports [smart component](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0) [`connect`](https://github.com/rackt/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options)ed with [`react-redux`](https://www.npmjs.com/package/react-redux)
- `components/*.js`: exports [dumb component](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)
- `components/*.css`: exports [css modules](http://glenmaddern.com/articles/css-modules) for respective component
- `service.js`: exports [`feathers`](http://feathersjs.com) service (recommended to use [`feathers-knex`](https://github.com/feathersjs/feathers-knex) and [`feathers-tcomb`](https://github.com/ahdinosaur/feathers-tcomb))

## FAQ

### how do i do relations between models?

implement them in your `getters.js` file as selectors.

```js
// app/groups/getter.js
import { createSelector } from 'reselect'
import { getMemberships } from 'app/memberships/getters'

export const getGroups = (state) => state.groups

export const getMembersByGroupId = createSelector (
  getGroups,
  getMemberships,
  (groups, memberships) => {
    const isInGroup = (group) => (membership) => {
      return group.id === membership.groupId
    }

    return Object.values(groups).map((group) => {
      return Object.values(memberships)
        .filter(isInGroup(group))
        .map((membership) => membership.memberId)
    })
  }
)
```

in the future, we should extract common relations into helper creators.

### how to set default props

```jsx
import React from 'react'

export default class Thing extends React.Component {
  static displayName = 'Thing'

  static defaultProps = {
    isAwesome: true
  }
  
  ...
}
```


### how to set prop types

```jsx
import React, { PropTypes } from 'react'

export default class Thing extends React.Component {
  static displayName = 'Thing'

  static propTypes = {
    increment: PropTypes.function
  }
  
  ...
}
```

### how to bind functions to parent component when passing them down?

```jsx
import React, { PropTypes } from 'react'

export class Parent extends React.Component {
  constructor(props) {
    super(props)
    this.state = { a: 0 }
  }

  render () {
    return <Child increment={this.increment} />
  }

  increment = () => {
    this.setState({ a: this.state.a + 1 })
  }
}

export class Child extends React.Component {
  static propTypes = {
    increment: PropTypes.function
  }

  render () {
    return <button onClick={this.props.increment}>click me</button>
  }
}
```

## known issues

- adding a new file won't always be noticed by `node-dev` or `watchify` due to usage of `bulk-require`). potential fix is to use `chokidar-cli` and some transform to watch for new files and re-run the script command
