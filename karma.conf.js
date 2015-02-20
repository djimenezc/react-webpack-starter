"use strict";

var RewirePlugin = require("rewire-webpack");
var webpack = require('webpack');

module.exports = function (config) {
  config.set({
    basePath: '',

    browsers: ['PhantomJS'],

    autoWatch: true,

    frameworks: [ 'mocha', 'chai' ],

    files: [
      'tests.webpack.js'
    ],

    preprocessors: {
      'tests.webpack.js': [ 'webpack' ]
    },

    reporters: [ 'mocha', 'junit' ],

    junitReporter: {
      outputFile: 'reports/karma-test-results.xml',
      suite: ''
    },

    webpack: {
      devtool: 'inline-source-map',
      module: {
        loaders: [
          { test: /\.jsx$/, loader: 'jsx-loader' }
        ]
      },
      plugins: [
        new webpack.DefinePlugin({
          'process.env.NODE_ENV': JSON.stringify('test')
        }),
        new RewirePlugin()
      ]
    },

    webpackServer: {
      noInfo: true
    }

  });
};

