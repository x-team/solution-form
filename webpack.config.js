const path = require('path')
const webpack = require('webpack')

// for now, there's some deprecation warning
// most possibly from babel-loader
process.noDeprecation = true

module.exports = {
  context: __dirname,
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  module: {
    loaders: [{
      test: /\.js|.jsx?$/,
      exclude: /(node_modules)/,
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015']
      }
    }, {
      test: /\.scss$/,
      loader: 'style-loader!css-loader!sass-loader?sourceMap'
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
