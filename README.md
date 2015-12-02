# craftworks-todomvc

** work in progress **

real-world, production-quality TodoMVC for [Craftworks](http://craftworks.enspiral.com)

## stack

- task runner: [npm scripts](http://substack.net/task_automation_with_npm_run)
- client bundler: [browserify](https://github.com/substack/browserify-handbook)
  - es6/jsx transform: [babelify](https://www.npmjs.com/package/babelify)
  - css transform: [sheetify](https://www.npmjs.com/package/sheetify)
  - configuration: [evalify](https://www.npmjs.org/package/evalify)
  - bulk require: [bulkify](https://www.npmjs.org/package/bulkify)
- utility functions: [ramda](http://ramdajs.com/docs/)
- directory structure:
  - `/config/`
    - `/config/defaults.js`
    - `/config/{ NODE_ENV }.js`
  - `/app/`
    - symlink `/app` to `/node_modules/app`
    - e.g.
      - `/app/package.json`
      - `/app/client.js`
      - `/app/server.js`
      - `/app/routes.js`
      - `/app/store.js`
      - `/app/models/todo.js`
      - `/app/services/todos.js`
      - `/app/clients/todos.js`
      - `/app/actions/todos.js`
      - `/app/action-types/todos.js`
      - `/app/reducers/todos.js`
      - `/app/getters/todos.js`
      - `/app/containers/todos.js`
      - `/app/components/todos/index.js`
      - `/app/components/todos/index.css`
    - always require top-down (`require('app/models/todo')`) instead of relative.
  - `/spec/`
    - e.g.
      - `/spec/services/todos.js`
      - `/spec/components/todos.js`
  - `/features/`
    - e.g.
      - `/features/steps.js`
      - `/features/todos.feature`
- data model: [tcomb](https://github.com/gcanti/tcomb)
- database: [knex](https://www.npmjs.com/package/knex)
- data validator: [tcomb-validator](https://github.com/gcanti/tcomb-validation)
- api service: [feathers-knex](https://www.npmjs.com/package/feathers-knex)
- api authentication: [feathers-authentication](https://www.npmjs.org/package/feathers-authentication)
- api transport: [primus](https://www.npmjs.com/package/primus)
- api client: [feathers-client](https://www.npmjs.com/package/feathers-client)
- client async actions: [redux-thunk](https://www.npmjs.com/package/redux-thunk)
- client actions: [redux-tcomb](https://www.npmjs.com/package/redux-tcomb)
- client action-types: [create-action-types](https://www.npmjs.com/package/create-action-types)
- client reducers: [redux-tcomb](https://github.com/gcanti/redux-tcomb)
- client getters: [reselect](https://www.npmjs.com/package/reselect)
- client store: [redux](https://www.npmjs.com/package/redux)
- client router: [redux-router](https://www.npmjs.com/package/redux-router)
- client views: [react](https://www.npmjs.com/package/react)
- client forms: [tcomb-form](https://github.com/gcanti/tcomb-form)
- test specs: [tape](https://www.npmjs.com/package/tape)
- test features: [cuke-tap](https://www.npmjs.com/package/cuke-tap)
- generators: [plop](https://github.com/amwmedia/plop)

refs: [0](http://teropa.info/blog/2015/09/10/full-stack-redux-tutorial.html), [1](http://blog.workshape.io/the-3ree-stack-react-redux-rethinkdb-express-js/)
