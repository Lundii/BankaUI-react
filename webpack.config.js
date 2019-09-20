var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    historyApiFallback: true,
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader'},
      { test: /\.css$/, use: [ 'style-loader', 'css-loader']},
      { test: /\.(png|jpg)$/i, use: [
        {
          loader: 'url-loader',
          options: {
            limit: 5000
          }
        },
        {
          loader: 'file-loader'
        }
      ]}
    ]
  },
  mode: 'development', 
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/public/index.html'
    })
  ]
}  