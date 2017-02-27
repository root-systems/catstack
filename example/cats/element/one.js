module.exports = {
  needs: {
    'html.create': 'first'
  },
  create: (api) => (cat) => api.html.create`
    <h1>${cat ? cat.name : ''}!</h1>  
  `
}
