# catstack

** work in progress **

modular framework for data-driven real-time apps 

![cat stack](http://i.imgur.com/v5zw1z3.jpg)

made by [Enspiral Root Systems](https://github.com/enspiral-root-systems/meta)

inspired by [`ahdinosaur/mad-science-handbook`](https://github.com/ahdinosaur/mad-science-handbook)

## concepts

- [modules](https://github.com/dominictarr/depject)
- [streams](https://github.com/pull-stream/pull-stream)
- [services](https://github.com/ahdinosaur/vas)
- [state, actions, effects, html views](https://github.com/ahdinosaur/inu)
- [data logs and views](https://github.com/flumedb/flumedb)
- [commands](http://substack.net/task_automation_with_npm_run)

## tools

- [node](https://github.com/creationix/nvm)
  - when in this directory run `nvm use` which will use the version of `node` specified in [our .nvmrc](./.nvmrc).
- [packages](https://www.npmjs.com/)
  - install with `npm install -g npm@3`
  - to install a package, run `npm install --save my-favorite-package`

## scripts

- [create](#create)
- [install](#install)
- [start](#start)
- [test](#test)
- [lint](#lint)
- [format](#format)
- [database](#database)

### install

generate new project

```shell
catstack gen:project
```

### start

#### dev

starts development environment

```shell
catstack start:dev
```

#### prod

starts production environment

```shell
catstack start
```

### test

runs tests

```shell
catstack test
```

#### test:spec

runs [tape](https://www.npmjs.com/package/tape) tests

can optionally take a [glob](https://www.npmjs.com/package/glob)

```shell
npm run test -- './todos/**/*.test.js'
```

default glob is `./**/*.test.js`

### lint

checks for [standard style](http://standardjs.com)

can optionally take a [glob](https://www.npmjs.com/package/glob)

```shell
npm run lint -- './todos/**/*.js'
```

default glob is `./**/*.js` ignoring `node_modules`

### format

converts to [standard](http://standardjs.com) if possible

can optionally take a [glob](https://www.npmjs.com/package/glob)

```shell
npm run format -- './**/*.js'
```

default glob is `./**/*.js` ignoring `node_modules`

### db:clean

## directory structure

- `/config/`
  - `/config/index.js`
  - `/config/${ NODE_ENV }.js`
- `/${ domain }/`
- tests are any files that end in `.test.js`

### domain overview

in contrast to frameworks like Rails which split our app into directories for each "type" of file (models, views, controllers), our app is split into directories for each conceptual domain, where each domain contains the various types of files *within* that domain.

each domain directory may contain any of:

- `state.js`: exports initial store state
- `actions/*.js`: exports store actions
- `effects/*.js`: exports effects
- `getters.js`: exports [`reselect`](https://www.npmjs.com/package/reselect) getters
- `pages/*.js`: exports routed views
- `elements/*.js`: exports presentation views
- `helpers/*.js`: exports helper functions
- `service.js`: exports [`vas`](https://github.com/ahdinosaur/vas) service

### `/${ domain }/state.js`

### `/${ domain }/actions/*.js`

### `/${ domain }/effects/*.js`

### `/${ domain }/getters.js`

### `/${ domain }/pages/*.js`

### `/${ domain }/elements/*.js`

### `/${ domain }/service.js`

## FAQ

### how do i do relations between models?

implement them in your `getters.js` file as selectors.

in the future, we should extract common relations into helper creators.
