/* eslint-disable semi */
const { v4: uuid } = require('uuid')

const bookmarks = [
  {
    id: uuid(),
    title: 'Thinkful',
    url: 'https://www.thinkful.com',
    description: 'Where I learn to code',
    rating: 5,
  },
  {
    id: uuid(),
    title: 'Reddit',
    url: 'https://www.reddit.com',
    description: 'New site for the world',
    rating: 4,
  },
  {
    id: uuid(),
    title: 'Trello',
    url: 'https://trello.com',
    description: 'This is how I track my app building process',
    rating: 4,
  },
  {
    id: uuid(),
    title: 'MDN',
    url: 'https://developer.mozilla.org/en-US/',
    description: 'Where I look up resource docs',
    rating: 5,
  },
  {
    id: uuid(),
    title: 'DevDocs',
    url: 'https://devdocs.io/',
    description: 'Database of documentation for dev tools',
    rating: 5,
  },
  {
    id: uuid(),
    title: 'public APIs',
    url: 'https://github.com/public-apis/public-apis',
    description: 'GitHub repo of free public APIs',
    rating: 4,
  },
]

module.exports = { bookmarks }
