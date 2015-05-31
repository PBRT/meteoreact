/*
  Webpack base config file
*/

var path = require('path')

module.exports = {
  entry: {
    app: [ path.resolve(__dirname, 'app.jsx')]
  },
  output: {
    path: path.resolve(__dirname, '../client'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/, exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(ttf|eot|svg|woff)$/, exclude: /node_modules/,
        loader: "url-loader"
      },
      {
        test: /\.css$/, exclude: /node_modules/,
        loader: 'style-loader!css-loader'
      },
    ]
  },
  resolve: {
    // you can now require('file') instead of require('file.coffee')
    extensions: ['', '.js', '.json', '.coffee', '.jsx'],
    modulesDirectories: [
      'web_modules',
      'node_modules'
    ]
  }
}
