const path = require('path')
const config = require('../cofig')

module.exports = {
  extensions: ['.js', '.vue', '.json'],
  alias: {
    'vue': 'vue/dist/vue.common.js',
    '@routes': path.resolve(config.srcRootDir, './routes'),
  }
}
