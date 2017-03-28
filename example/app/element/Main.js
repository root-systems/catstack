module.exports = {
  create: (api) => {
    const { Element } = api.css

    const mainStyles = (props) => ({})
    const Main = Element('div', mainStyles)

    return Main
  }
}
