"use strict";

var React = require("react");
var Router = require("react-router");
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

// es6 polyfill (why is this needed?;)
if(!Object.assign) {
  Object.assign = React.__spread;
}

// set routes
var Application = require('./Application');
var Home = require('./Home');
var Checkbox = require('./Checkbox');
var SomePage = require('./SomePage');

// export routes
module.exports = (
  <Route name="app" path="/" handler={Application}>
    <Route name="checkbox" path="/checkbox" handler={Checkbox} />
    <Route name="some-page" path="/some-page" handler={SomePage} />
    <DefaultRoute name="home" handler={Home} />
  </Route>
);
