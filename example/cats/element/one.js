module.exports = {
  needs: {
    'html.hx': 'first'
  },
  create: (api) => (cat) => api.html.hx`
    <h1>${cat ? cat.name : ''}!</h1>  
  `
}
