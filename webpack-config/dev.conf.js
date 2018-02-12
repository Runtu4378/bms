const config = require('./cofig')

const HOST = 'localhost'
const PORT = 8081

module.exports = {
  entry: require('./public/entry'),

  output: require('./public/output'),

  module: require('./public/module'),

  plugins: require('./public/plugins'),

  resolve: require('./public/resolve'),

  devtool: 'inline-source-map',

  devServer: {
    clientLogLevel: 'warning',
    historyApiFallback: true,
    hot: true,
    compress: true,
    host: HOST || config.dev.host,
    port: PORT || config.dev.port,
    open: config.dev.autoOpenBrowser,
    overlay: config.dev.errorOverlay
      ? { warnings: false, errors: true }
      : false,
    publicPath: config.dev.assetsPublicPath,
    proxy: config.dev.proxyTable,
    quiet: true, // necessary for FriendlyErrorsPlugin
    watchOptions: {
      poll: config.dev.poll,
    }
  },
}
