const path = require('path')

module.exports = [
  {
    test: /\.(ts|tsx)$/,
    loaders: ['babel-loader', 'awesome-typescript-loader']
  },
  {
    test: /\.jsx?$/,
    loader: 'babel-loader',
  },
  {
    test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
    loader: 'file-loader',
  },
  {
    test: /\.(woff|woff2)$/,
    loader: 'url-loader?prefix=font/&limit=5000',
  },
  {
    test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
    loader: 'url-loader?limit=10000&mimetype=application/octet-stream',
  },
  {
    test: /\.gif/,
    loader: 'url-loader?limit=10000&mimetype=image/gif',
  },
  {
    test: /\.jpg/,
    loader: 'url-loader?limit=10000&mimetype=image/jpg',
  },
  {
    test: /\.less/,
    exclude: /node_modules/,
    use: [
      'style-loader',
      'css-loader',
      'less-loader',
    ],
  },
  {
    test: /\.(jpg|png|gif|svg|ico)$/,
    loader: 'base64-inline-loader?name=[name].[ext]',
  },
]
