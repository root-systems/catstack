const nest = require('depnest')
const assign = require('object-assign')
const { createRenderer, combineRules, enhance } = require('fela')
const { render } = require('fela-dom')
// const devPlugins = require('fela-preset-dev')
const webPlugins = require('fela-preset-web')
const hyperFela = require('hyper-fela')

module.exports = {
  priority: 100,
  gives: nest('css', [
    'config',
    'combineRules',
    'Element',
    'connect',
    'enhance',
    'render',
    'renderer',
    'renderRule',
    'renderStatic',
    'renderKeyframe',
    'renderFont',
    'renderToString',
    'subscribe',
    'clear'
  ]),
  needs: nest({
    'config.all': 'first',
    'html.h': 'first',
    css: {
      config: 'reduce',
      renderer: 'first',
      renderRule: 'first'
    },
    'app.theme': 'reduce'
  }),
  create: (api) => {
    var renderer
    var theme

    const { createStyledElement, connectStyles } = hyperFela({
      h: api.html.h,
      renderRule: api.css.renderRule
    })

    return nest('css', {
      config: (sofar = {}) => assign({}, sofar, {
        plugins: [
          ...(sofar.plugins || []),
          ...webPlugins
        ]
      }),
      combineRules,
      enhance,
      Element: createStyledElement,
      connect: connectStyles,
      renderer: () => {
        if (!renderer) renderer = createRenderer(api.css.config())
        return renderer
      },
      render: (mountNode) => render(api.css.renderer(), mountNode),
      renderRule: (rule, props) => {
        props = assign({ theme: getTheme() }, props)
        return api.css.renderer().renderRule(rule, props)
      },
      renderKeyframe: (keyframe, props) => {
        props = assign({ theme: getTheme() }, props)
        return api.css.renderer().renderKeyframe(keyframe, props)
      },
      renderFont: (family, files, properties) => {
        return api.css.renderer().renderFont(family, files, properties)
      },
      renderStatic: (style, selector) => {
        return api.css.renderer().renderStatic(style, selector)
      },
      renderToString: () => api.css.renderer().renderToString(),
      subscribe: (listener) => {
        return api.css.renderer().subscribe(listener)
      },
      clear: () => api.css.renderer().clear()
    })

    function getTheme () {
      if (!theme) theme = api.app.theme()
      return theme
    }
  }
}
