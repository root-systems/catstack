module.exports = {
  create: (api) => {
    const oneStyle = (props) => ({})
    const One = api.css.Element('h1', oneStyle)

    return ({ cat }) => One([
      cat && cat.name,
      '!'
    ])
  }
}
