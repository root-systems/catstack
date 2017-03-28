module.exports = {
  create: (api) => {
    const { Element } = api.css

    const linkStyles = (props) => ({})
    const Link = Element('a', linkStyles, {
      passThrough: ['href']
    })

    return Link
  }
}
