'use strict';

var webpack = require('webpack');

var plugins = [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
  })
];

if (process.env.COMPRESS) {
  plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  );
}

module.exports = {
  entry: ['webpack/hot/dev-server', './components/App.jsx'],

  output: {
    path: './build/',
    filename: 'main.js'
  },

  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loader: 'jsx-loader?harmony',
        exclude: /node_modules/
      }, {
         test: require.resolve("react"),
         loader: "expose?React"
      }, {
        test: /\.styl$/,
        loader: 'style-loader!css-loader!stylus-loader'
      }, {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }, {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=8192'
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
  },

  plugins: plugins
};
