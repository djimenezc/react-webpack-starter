"use strict";

var React = require("react");
var Link = require("react-router").Link;

module.exports = React.createClass({
  render: function() {
    return (
      <div>
        <h2>fb tutorials</h2>
        <ul>
          <li>
            <Link to="comment-box">Comment Box</Link>
          </li>
        </ul>
      </div>
    );
  }
});
