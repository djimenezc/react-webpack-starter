/*
 * Webpack development server configuration
 *
 * This file is set up for serving the webpak-dev-server, which will watch for changes and recompile as required if
 * the subfolder /webpack-dev-server/ is visited. Visiting the root will not automatically reload.
 */

'use strict';

var webpack = require('webpack');

module.exports = {
  output: {
    publicPath: '/assets/',
    filename: 'main.jsx'
  },

  entry: [
    'webpack/hot/only-dev-server',
    './src/scripts/components/app.js'
  ],

  cache: true,

  debug: true,

  devtool: false,

  stats: {
    colors: true,
    reasons: true
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  }

  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loaders: 'react-hot!jsx-loader?harmony'
      }, {
        test: /\.styl$/,
        loaders: 'style-loader!css-loader!stylus-loader'
      }, {
        test: /\.css$/,
        loaders: 'style-loader!css-loader'
      }, {
        test: /\.(png|jpg)$/,
        loaders: 'url-loader!limit=8192'
      }, {
      // required for bootstrap icons
        test: /\.woff$/,
        loader: 'url?prefix=font/&limit=5000&mimetype=application/font-woff'
      }, {
        test: /\.ttf$/,
        loader: 'file?prefix=font/'
      }, {
        test: /\.eot$/,
        loader: 'file?prefix=font/'
      }, {
        test: /\.svg$/,
        loader: 'file?prefix=font/'
      }
    ],

    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin()
    ]
};
