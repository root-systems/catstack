const nest = require('depnest')
const assign = require('object-assign')
const { createRenderer, combineRules, enhance } = require('fela')
const { render } = require('fela-dom')
const devPlugins = require('fela-preset-dev')
const webPlugins = require('fela-preset-web')

module.exports = {
  gives: nest('css', [
    'config',
    'render',
    'renderer',
    'renderRule'
  ]),
  needs: nest({
    'config.all': 'first',
    css: {
      config: 'reduce',
      renderer: 'first'
    }
  }),
  create: (api) => {
    var renderer
    return nest('css', {
      config: (sofar = {}) => assign({}, sofar, {
        plugins: [
          ...(sofar.plugins || []),
          ...webPlugins,
          // TODO
          //...(api.config.all().nodeDev === 'development' ? devPlugins : [])
          ...devPlugins
        ]
      }),
      combineRules,
      enhance,
      renderer: () => {
        if (!renderer) renderer = createRenderer(api.css.config())
        return renderer
      },
      render: (mountNode) => render(api.css.renderer(), mountNode),
      renderRule: (rule, props) => {
        return api.css.renderer().renderRule(rule, props)
      },
      renderKeyframe: (keyframe, props) => {
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
  }
}
