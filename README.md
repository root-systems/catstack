<h1 align="center">
  <img
    alt="catstack on a post-it note"
    src="http://i.imgur.com/v5zw1z3.jpg"
    height="200"
  />
  <br />
  catstack
</h1>

<h4 align="center">
  :cat2: :cat2: :cat2: A modular framework for teams working on production web apps.
</h4>

<div align="center">
  <!-- stability -->
  <a href="https://nodejs.org/api/documentation.html#documentation_stability_index">
    <img src="https://img.shields.io/badge/stability-experimental-orange.svg?style=flat-square" alt="stability" />
  </a>
  <!-- npm version -->
  <a href="https://npmjs.org/package/catstack">
    <img src="https://img.shields.io/npm/v/catstack.svg?style=flat-square" alt="npm version" />
  </a>
  <!-- build status -->
  <a href="https://travis-ci.org/enspiral-root-systems/catstack">
    <img src="https://img.shields.io/travis/enspiral-root-systems/catstack/master.svg?style=flat-square" alt="build status" />
  </a>
  <!-- test coverage -->
  <a href="https://codecov.io/github/enspiral-root-systems/catstack">
    <img src="https://img.shields.io/codecov/c/github/enspiral-root-systems/catstack/master.svg?style=flat-square" alt="test coverage" />
  </a>
  <!-- downloads -->
  <a href="https://npmjs.org/package/catstack">
    <img src="https://img.shields.io/npm/dm/catstack.svg?style=flat-square"
      alt="Downloads" />
  </a>
  <!-- standard style -->
  <a href="https://github.com/feross/standard">
    <img src="https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square" alt="standard style" />
  </a>
</div>

<details>
  <summary>table of contents</summary>
  <li><a href="#features">features</a></li>
  <li><a href="#demos">demos</a></li>
  <li><a href="#concepts">concepts</a></li>
  <li><a href="#bin">bin</a></li>
  <li><a href="#api">api</a></li>
  <li><a href="#install">install</a></li>
  <li><a href="#inspiration">inspiration</a></li>
</details>

sponsored by [Enspiral Root Systems](https://github.com/enspiral-root-systems/meta)

inspired by [`ahdinosaur/mad-science-handbook`](https://github.com/ahdinosaur/mad-science-handbook)

for previous version, see [catstack@1](https://github.com/enspiral-root-systems/catstack/commit/8830cf8b4bb8ce794ed491d03ab0d96bbb66df8f)

## features

- provides development architecture which linearly scales complexity as your app evolves.
- provides prescriptive opinions to bootstap teams onto a consistent development platform across projects.
- everything is a [`depject`](https://github.com/depject/depject) module that can be overridden or combined.
- app file structure maps to app modules, making it easy to separate concerns and get things done.
- provides full stack app server for both development and production.
- consistent concepts across front and back end.


## demos

- [catstack.herokuapp.com](https://catstack.herokuapp.com/): this repo's [./example](example) deployed to heroku

## concepts

- [modules](https://github.com/dominictarr/depject)
- [streams](https://github.com/pull-stream/pull-stream)
- [services](https://github.com/ahdinosaur/vas)
- [state, actions, effects, html views](https://github.com/ahdinosaur/inu)
- [data logs and views](https://github.com/flumedb/flumedb)
- [commands](http://substack.net/task_automation_with_npm_run)

## bin

- [generate](#generate)
- [dev](#dev)
- [server](#server)
- [test](#test)
- [lint](#lint)

### gen

TODO

generate new project

```shell
catstack generate:project
```

### start

#### dev

starts development server

```shell
catstack dev server
```

#### server

starts production server

```shell
catstack server
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

## license

The Apache License

Copyright &copy; 2016-2017 Michael Williams

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
