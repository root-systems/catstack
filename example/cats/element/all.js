module.exports = {
  needs: {
    'html.hx': 'first'
  },
  create: (api) => (cats) => api.html.hx`
    <ul>
      ${cats.map(cat => api.html.hx`
        <li>
          <a href=${`/cats/${cat.id}`}>
            ${cat.name}
          </a>
        </li>
      `)}
    </ul>
  `
}
