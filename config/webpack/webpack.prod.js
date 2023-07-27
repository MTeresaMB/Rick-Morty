const { merge } = require('webpack-merge');
const base = require('./webpack.base');
const helpers = require('./webpack.helpers');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(base, {
  mode: 'production',
  output: {
    path: helpers.resolveFromRootPath('dist'),
    filename: './js/[name].[chunkhash].js',
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: './images/[name].[ext]?[hash]',
          esModule: false,
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, 
        {
          loader: 'css-loader',
        },
        'sass-loader']
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: './css/[chunkhash].[name].css',
      chunkFilename: '[chunkhash].[id].css',
    }),
  ],
});