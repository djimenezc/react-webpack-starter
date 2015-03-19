"use strict";

var React = require("react");
var Link = require("react-router").Link;

module.exports = React.createClass({
  render: function() {
    var style = {
      default: {
        "padding": "2em"
      }
    };

    return (

      <div style={style.default}>
        <h2>Demos</h2>
        <ul>
          <li>
            <Link to="material-ui">Material UI</Link>
          </li>
          <li>
            <Link to="checkbox">Checkbox</Link>
          </li>
        </ul>
        <p>Or open the page that shows <Link to="readme">README.md</Link>.</p>
      </div>
    );
  }
});
