const config = require('./cofig')

module.exports = {
  entry: require('./public/entry'),

  output: require('./public/output'),

  module: require('./public/module'),

  plugins: require('./public/plugins'),
}
