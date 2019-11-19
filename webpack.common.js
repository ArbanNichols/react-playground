const path = require('path');
const webpack = require('webpack');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const APP_DIR = path.resolve(__dirname, './src/jsx/');

module.exports = {
  entry: {
    main: ['core-js-bundle', '@babel/polyfill', APP_DIR],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash:9].js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(ico|jpg|png)$/,
        use: [{ loader: 'file-loader', options: {} }],
      },
      {
        test: /\.svg/,
        use: {
          loader: 'svg-url-loader',
        },
      },
    ],
  },
  optimization: {
    moduleIds: 'hashed',
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
            return `npm.${packageName.replace('@', '')}`;
          },
        },
      },
    },
  },
  plugins: [
    new CopyWebpackPlugin([{ from: 'src/static' }]),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
    new webpack.ProvidePlugin({
      PropTypes: 'prop-types',
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
