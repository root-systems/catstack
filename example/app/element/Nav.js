module.exports = {
  create: (api) => {
    const { Element } = api.css

    const navStyles = (props) => ({
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around'
    })
    const Nav = Element('nav', navStyles)

    return Nav
  }
}
