"use strict";

var React = require("react");
var Link = require("react-router").Link;

module.exports = React.createClass({
  render: function() {
    return (
      <div>
        <h2>Home</h2>
        <p>Click on a React demos: </p>
        <ul>
          <li>
            <Link to="checkbox">Checkbox</Link>
          </li>
          <li>
            <Link to="material-ui">Material UI</Link>
          </li>
        </ul>
        <p>Or try to switch to <Link to="some-page">some page</Link>.</p>
      </div>
    );
  }
});
