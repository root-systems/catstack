# business-stack

** work in progress **

real-world, production-quality stack for [Craftworks](http://craftworks.enspiral.com)

## stack

- task runner: [npm scripts](http://substack.net/task_automation_with_npm_run)
- client bundler: [browserify](https://github.com/substack/browserify-handbook)
  - es6/jsx transform: [babelify](https://www.npmjs.com/package/babelify)
  - css transform: [cssify](https://www.npmjs.com/package/cssify) and [css-modules-require-hook](https://www.npmjs.com/package/css-modules-require-hook)
  - bulk require: [bulkify](https://www.npmjs.org/package/bulkify)
- configuration: [simple-rc](https://www.npmjs.org/package/simple-rc)
- utility functions: [ramda](http://ramdajs.com/docs/)
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
- test dom: [zombie](http://zombie.js.org/)
- TODO generators: [plop](https://github.com/amwmedia/plop)


## directory structure

- `/config/`
  - `/config/index.js`
  - `/config/{ NODE_ENV }.js`
- `/app/${ module }/`
  - symlink `/app` to `/node_modules/app`
  - only do relative requires if within module
  - otherwise, always require top-down (`require('app/things/model')`).
- `/feature/`
  - `/feature/support/world.js`
  - `/feature/step_definitions/steps.js`
  - `/feature/todos.feature`

### micro-services

TODO split into micro-services based on [mad-science-stack](https://github.com/enspiral-craftworks/mad-science-stack)

TODO write docs about what is a micro-service

### app modules

in contrast to frameworks like Rails which split our `app` into directories for each "type" of file (models, views, controllers), our `app` is split into directories for each module, where each module contains the various types of files *within* that module.

each module directory may contain any of:

- `index.js`: exports all the below exports from the module
- `models/*.js`: exports [`tcomb`](https://www.npmjs.com/package/tcomb) models
- `constants.js`: exports constants (such as [redux action types](https://www.npmjs.com/package/create-action-types))
- `actions.js`: exports [redux actions](https://www.npmjs.com/package/redux-actions)
- `reducer.js`: exports [redux reducer](http://redux.js.org/docs/basics/Reducers.html)
- `routes.js`: exports [`function (store) { return <ReactRouter.Route /> }`](https://www.npmjs.com/package/react-router)
- `getters.js`: exports [`reselect`](https://www.npmjs.com/package/reselect) getters for use in containers' `connect`
- `containers/*.js`: exports [smart component](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0) [`connect`](https://github.com/rackt/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options)ed with [`react-redux`](https://www.npmjs.com/package/react-redux)
- `components/*.js`: exports [dumb component](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)
- `components/*.css`: exports [css modules](http://glenmaddern.com/articles/css-modules) for respective component
- `service.js`: exports [`feathers`](http://feathersjs.com) service (recommended to use [`feathers-knex`](https://github.com/feathersjs/feathers-knex) and [`feathers-tcomb`](https://github.com/ahdinosaur/feathers-tcomb))
- `client.js`: exports [`feathers-client`](https://github.com/feathersjs/feathers-client)

### setup postgres database

install `docker`

- to install db, run `npm run pg:pull`
- to create db, run `npm run pg:run`
- to start db, run `npm run pg:start`
- to stop db, run `npm run pg:stop`
- to remove db, run `npm run pg:rm`
- to show db logs, run `npm run pg:logs`

run latest migrations with

```shell
npm run knex -- migrate:latest
```

or run [any other `knex` command] with `npm run knex -- [command] [args]`

## known issues

- adding a new file won't always be noticed by `node-dev` or `watchify` due to usage of `bulk-require`). potential fix is to use `chokidar-cli` and some transform to watch for new files and re-run the script command

## resources

- [simplest redux example](https://github.com/jackielii/simplest-redux-example/blob/master/index.js)
