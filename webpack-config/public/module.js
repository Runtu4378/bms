const config = require('../cofig')

module.exports = {
  rules: [
    {
      test: /\.(js|vue)$/,
      loader: 'eslint-loader',
      enforce: 'pre',
      include: [config.srcRootDir],
      options: {
        formatter: require('eslint-friendly-formatter'),
        emitWarning: !config.dev.showEslintErrorsInOverlay
      }
    },
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      options: {
        presets: [
          ['env', { modules: false }],
          'stage-0',
        ],
        "plugins": [
          "transform-runtime",
        ],
      },
    },
    {
      test: /iview\/.*?js$/,
      loader: 'babel-loader'
    },
    {
      test: /\.vue$/,
      use: [
        {
          loader: 'vue-loader',
        },
        {
          loader: 'iview-loader',
          options: {
              prefix: false
          }
        }
      ],
    },
    {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader?minimize',
        'autoprefixer-loader',
      ],
    },
    {
      test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
      loader: 'url-loader?limit=1024'
    },
  ],
}
