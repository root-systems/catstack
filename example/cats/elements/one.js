module.exports = {
  needs: {
    'inu.html': 'first'
  },
  create: (api) => (cat) => api.inu.html`
    <h1>${cat ? cat.name : ''}!</h1>  
  `
}
