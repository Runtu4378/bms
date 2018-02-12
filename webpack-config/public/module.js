module.exports = {
  rules: [
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
    { test: /\.vue$/, loader: 'vue-loader' }
  ]
}
