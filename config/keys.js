if (process.env.NODE_ENV === 'production') {
  const prod = require('./prodKeys')
  module.exports = {
    keys: prod
  }
} else {
  const dev = require('./devKeys')
  module.exports = {
    keys: dev
  }
}
