const assign = require('object-assign')
const _Page = require('inu-router/Page')

module.exports = Page

function Page (definition) {
  return _Page(assign({}, definition, {
    create: (api) => {
      var page = definition.create(api)
      // if get given, use get on model
      if (page.get) {
        const _view = page.view
        page.view = (model, dispatch) => {
          const props = page.get(model)
          return _view(props, dispatch)
        }
      }
      // if page given, wrap view in layout
      if (page.layout) {
        page.view = page.layout(page.view)
      }
      return page
    }
  }))
}
