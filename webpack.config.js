var path = require('path');
var webpack = require('webpack');

var appRoot = __dirname + "/src";
var bowerRoot = __dirname + "/bower_components";
var styleRoot = appRoot + "/assets/styles";

module.exports = {
  cache: true,

  debug: true,

  entry: [
    appRoot + "/app.jsx"
  ],

  output: {
    path: './build',
    filename: 'bundle.js',
    chunkFilename: "[id].bundle.js"
  },

  module: {
    loaders: [
      {
        // required to write 'require('./style.css')'
        test: /\.css$/,
        loaders: ['style', 'css']
      }, {
        // require raw html for partials
        test: /\.html$/,
        loader: 'raw'
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
      }, {
        test: /\.jsx$/,
        loader: 'jsx-loader'
      }
    ],

    // don't parse some dependencies to speed up build.
    // can probably do this non-AMD/CommonJS deps
    noParse: [
      // path.join(bowerRoot, '/jquery'),
      // path.join(bowerRoot, '/bootstrap')
    ]
  },

  resolve: {

    alias: {
      // bower: bowerRoot
    },

    extensions: [
      '',
      '.js',
      '.css'
    ],

    root: appRoot
  },

  plugins: [
    // bower.json resolving
    // new webpack.ResolverPlugin([new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])], ["normal", "loader"]),

    // disable dynamic requires
    // new webpack.ContextReplacementPlugin(/.*$/, /a^/),

    // new webpack.ProvidePlugin({
    //   'angular': 'exports?window.angular!bower/angular'
    // })

  ],

  devtool: 'eval'
};
