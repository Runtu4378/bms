const config = require('../cofig')

module.exports = {
  path: config.buildDir,
  filename: '[name].js',
  chunkFilename: '[id].chunk.js',
  publicPath: '/'
}