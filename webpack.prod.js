var merge = require('webpack-merge');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
var Visualizer = require('webpack-visualizer-plugin');

var common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  module: {
    rules: [{
      test: /\.(scss|css)$/,
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader',
        'sass-loader',
      ],
    }]
  },
  optimization: {
    minimizer: [
      new TerserPlugin({}),
      new OptimizeCssAssetsPlugin({})
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new Visualizer({ filename: './statistics.html' }),
  ],
});
