module.exports = {
  needs: {
    'html.create': 'first'
  },
  create: (api) => (cats) => api.html.create`
    <ul>
      ${cats.map(cat => api.html.create`
        <li>
          <a href=${`/cats/${cat.id}`}>
            ${cat.name}
          </a>
        </li>
      `)}
    </ul>
  `
}
