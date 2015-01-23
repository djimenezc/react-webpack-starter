"use strict";

var React = require("react");
var Link = require("react-router").Link;

module.exports = React.createClass({
  render: function() {
    return (
      <div>
        <h2>Home</h2>
        <p>This is the homepage.</p>
        <p>I dare you to click on something: </p>
        <ul>
          <li>
            <Link to="checkbox">Checkbox</Link>
          </li>
          <li>
            <Link to="home">home</Link>
          </li>
        </ul>
        <p>Or try to switch to <Link to="some-page">some page</Link>.</p>
      </div>
    );
  }
});
