const config = {
  development: {
    raven: 'https://0665e172df0442888b2dde9a9630af11@sentry.io/1306597',
    api: 'https://prodevolution-api.herokuapp.com'
  },

  // development: {
  //   api: 'http://localhost:3001',
  // }
}

export default config[process.env.NODE_ENV] // eslint-disable-line
