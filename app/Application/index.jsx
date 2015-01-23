"use strict";

var React = require("react");
var RouteHandler = require("react-router").RouteHandler;

// Export React so the dev tools can find it.
// NOTE: Currently dev tools are broken.
(window !== window.top ? window.top : window).React = React;

require("./style.css");

var Application = React.createClass({
  render: function() {
    return (
      <div>
        <h1>react-webpack-starter</h1>
        <RouteHandler />
      </div>
    );
  },
});

module.exports = Application;
