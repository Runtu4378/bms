const fs = require('fs')
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {

  devtool: 'inline-source-map',

  // entry: fs.readdirSync(__dirname).reduce((entries, dir) => {
  //   const fullDir = path.join(__dirname, dir)
  //   const entry = path.join(fullDir, 'app.js')
  //   if (fs.statSync(fullDir).isDirectory() && fs.existsSync(entry)) {
  //     entries[dir] = ['webpack-hot-middleware/client', entry]
  //   }

  //   return entries
  // }, {}),

  entry: {
    "index": ['webpack-hot-middleware/client', path.join(__dirname, '/src/app.js')]
  },

  output: {
    path: path.join(__dirname, '__build__'),
    filename: '[name].js',
    chunkFilename: '[id].chunk.js',
    publicPath: '/__build__/'
  },

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

  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.vue$/, loader: 'vue-loader' }
    ]
  },

  resolve: {
    // alias: {
    //   vuex: path.resolve(__dirname, '../src/index.esm.js')
    // }
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'shared',
      filename: 'shared.js'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),

    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, `./src/index.ejs`),
      // chunks: ['webpack-runtime', page, 'commons/commons'],
      // hash: true, // 为静态资源生成hash值
      xhtml: true,
    }),

    new CleanWebpackPlugin('__build__/*', {
      root: __dirname,
      verbose: true,
      dry: false,
    }),
  ]

}
