const prod = require('./prodKeys')
const dev = require('./devKeys')

if (process.env.NODE_ENV === 'production') {
  module.exports = {
    keys: prod
  }
} else {
  module.exports = {
    keys: dev
  }
}
