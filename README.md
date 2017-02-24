# catstack

** work in progress **

modular framework for data-driven real-time apps

![cat stack](http://i.imgur.com/v5zw1z3.jpg)

made by [Enspiral Root Systems](https://github.com/enspiral-root-systems/meta)

inspired by [`ahdinosaur/mad-science-handbook`](https://github.com/ahdinosaur/mad-science-handbook)

for previous version, see [catstack@1](https://github.com/enspiral-root-systems/catstack/commit/8830cf8b4bb8ce794ed491d03ab0d96bbb66df8f)

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

runs [`pull-test`](https://github.com/ahdinosaur/pull-test) tests

can optionally take a [glob](https://www.npmjs.com/package/glob)

```shell
npm run test -- './todos/**/*.test.js'
```

default glob is `./**/*.test.js` ignoring `node_modules`

### lint

checks for [standard style](http://standardjs.com)

can optionally take a [glob](https://www.npmjs.com/package/glob)

```shell
npm run lint -- './todos/**/*.js'
```

default glob is `./**/*.js` ignoring `node_modules`

### format

converts to [standard style](http://standardjs.com) if possible

can optionally take a [glob](https://www.npmjs.com/package/glob)

```shell
npm run format -- './**/*.js'
```

default glob is `./**/*.js` ignoring `node_modules`

### db:clean

## directory structure

the `catstack` files are organized in the following hierarchy:

> ${topic} / ${type} / ${module}.js

- `config/`
  - `config/index.js`
  - `config/${ NODE_ENV }.js`
- `${ topic }/`
- tests are any files that end in `.test.js`

### topic overview

in contrast to frameworks like Rails which split our app into directories for each "type" of file (models, views, controllers), our app is split into directories for each conceptual topic, where each topic contains the various types of files *within* that topic.

each topic directory may contain any of:

- `state.js`: exports initial store state
- `action/*.js`: exports store actions
- `effect/*.js`: exports effects
- `getter/*.js`: exports [`reselect`](https://www.npmjs.com/package/reselect) getters
- `page/*.js`: exports routed views
- `element/*.js`: exports presentation views
- `helper/*.js`: exports helper functions
- `service.js`: exports [`vas`](https://github.com/ahdinosaur/vas) service

### `${ topic }/state.js`

```js
// cats/state.js`
module.exports = {
  create: () => ({
    init: () => ({
      model: {},
      effect: null
    })
  })
}
```

### `/${ topic }/action/*.js`

```js
// cats/action/create.js
module.exports = {
  create: () => ({
    update: (model, action) => {
      console.log('cat:create', model, action)
      return model
    }
  })
}
```

### `/${ topic }/effect/*.js`

```js
// cats/effect/fetch.js
module.exports = {
  create: () => ({
    run: (model, effect) => {
      console.log('cat:fetch', effect)
    }
  })
}
```

### `/${ topic }/get/*.js`

```js
// cats/get/cats.js
module.exports = {
  create: () => (state) => state.cats
}
```

### `/${ topic }/page/*.js`

```js
// cats/page/show.js
module.exports = {
  needs: {
    'app.layout.main': 'first',
    cats: {
      'element.profile': 'first',
      'get.show': 'first'
    }
  },
  create: (api) => ({
    route: '/cats/:catId',
    layout: api.layout.main,
    get: api.cats.get.show,
    view: api.cats.element.profile
  })
}
```

### `/${ topic }/element/*.js`

```js
// cats/element/profile.js
module.exports = {
  needs: {
    'inu.html': 'first'
  },
  create: (api) => ({
    view: (cat) => api.html`
      <div>${cat.name}</div>
    `
  })
}
```

### `/${ topic }/service.js`

```js
// cats/service.js
module.exports = {
  needs: {
    data: 'first'
  },
  manifest: {
    all: 'source',
    get: 'async'
  },
  create: function (api) {
    const cats = [{
      name: 'Fluffy'
    }, {
      name: 'Zoe'
    }]

    return {
      methods: { all, get }
    }

    function all () {
      return pull.values(cats)
    }

    function get (id, cb) {
      cb(null, data[id])
    }
  }
})
```

## FAQ

### how do i do relations between models?

implement them in your `getters.js` file as selectors.

in the future, we should extract common relations into helper creators.
