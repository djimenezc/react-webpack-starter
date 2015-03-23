// source -- https://github.com/webpack/react-starter
// source -- https://github.com/reactjs/react-tutorial/blob/master/server.js
// source -- https://github.com/sequelize/express-example/blob/master/app.js

"use strict";

var server = function(options) {

  var express = require("express");
  var bodyParser = require("body-parser");
  var cookieParser = require('cookie-parser');
  var path = require("path");
  var models = require('./models');

  // Routes
  var users  = require('./routes/users');

  // require the page rendering logic
  var renderApplication = options.prerender ?
    require("../build/prerender/main.js") :
    require("../config/dev-index-page.js");

  // load bundle information from stats
  var stats = require("../build/stats.json");

  var publicPath = stats.publicPath;

  var STYLE_URL = options.separateStylesheet && (publicPath + "main.css?" + stats.hash);
  var SCRIPT_URL = publicPath + [].concat(stats.assetsByChunkName.main)[0];
  var COMMONS_URL = publicPath + [].concat(stats.assetsByChunkName.commons)[0];

  var app = express();

  var port = (process.env.PORT || options.defaultPort || 8080);

  // serve the static assets
  app.use("/_assets", express.static(path.join(__dirname, "..", "build", "public"), {
    maxAge: "200d" // We can cache them as they include hashes
  }));

  app.use(cookieParser());

  app.use("/", express.static(path.join(__dirname, "..", "public"), {}));

  app.use(bodyParser.json());

  // REST API
  app.use('/users', users);

  // load react application
  app.get("/*", function(req, res) {
    renderApplication(req.path, {}, SCRIPT_URL, STYLE_URL, COMMONS_URL, function(err, html) {
      res.contentType = "text/html; charset=utf8";
      res.end(html);
    });
  });

  // catch 404 and forward to error handler
  app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

  // error handlers
  // development error handler
  // will print stacktrace
  if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
      res.status(err.status || 500);
      res.render('error', {
        message: err.message,
        error: err
      });
    });
  } else {
    // production error handler
    // no stacktraces leaked to user
    app.use(function(err, req, res, next) {
      res.status(err.status || 500);
      res.render('error', {
        message: err.message,
        error: {}
      });
    });
  }

  app.set('port', port);

  models.sequelize.sync().then(function () {
    app.listen(app.get('port'), function() {
      console.log("Server listening on port " + port);
    });
  });
};

module.exports = server;
