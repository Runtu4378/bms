const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const path = require('path')
const config = require('../cofig')

module.exports = [
  new webpack.optimize.CommonsChunkPlugin({
    name: 'shared',
    filename: 'shared.js',
  }),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
  }),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoEmitOnErrorsPlugin(),

  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: path.resolve(config.srcRootDir, './index.ejs'),
    // chunks: ['webpack-runtime', page, 'commons/commons'],
    // hash: true, // 为静态资源生成hash值
    xhtml: true,
  }),

  new CleanWebpackPlugin(config.buildDir + '/*', {
    root: config.staticRootDir,
    verbose: true,
    dry: false,
  }),

  /* 抽取出chunk的css */
  new ExtractTextPlugin('[name]/styles.css'),
]
