module.exports = {
  needs: ['app.element.Link', 'first'],
  create: (api) => {
    const { Element } = api.css

    const listStyle = (props) => ({})
    const List = Element('ul', listStyle)

    const listItemStyle = (props) => ({})
    const ListItem = Element('li', listItemStyle)

    const { Link } = api.app.element

    return ({ cats }) => List([
      cats.map(cat => ListItem([
        Link({
          href: `/cats/${cat.id}`
        }, [
          cat.name
        ])
      ]))
    ])
  }
}
