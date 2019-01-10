const path = require('path');
const HtmlWebpackPlugins = require('html-webpack-plugin');

module.exports = {
  entry: './app/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js',
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader' },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },

      {
        test: /\.(ttf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'fonts',
              name: '[name].[ext]',
              publicPath: '../fonts',
            },
          },
        ],
      },
      {
        test: /\.(jpg|png)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'images',
              name: '[name].[ext]',
              publicPath: '../images',
            },
          },
        ],
      },
    ],
  },
  mode: 'production',
  plugins: [
    new HtmlWebpackPlugins({
      template: './app/index.html',
    }),
  ],
};
