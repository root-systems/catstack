module.exports = {
  needs: {
    'inu.html': 'first'
  },
  create: (api) => (cats) => api.inu.html`
    <ul>
      ${cats.map(cat => api.inu.html`
        <li>
          <a href=${`/cats/${cat.id}`}>
            ${cat.name}
          </a>
        </li>
      `)}
    </ul>
  `
}
