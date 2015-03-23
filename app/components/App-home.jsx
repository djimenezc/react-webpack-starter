"use strict";

var React = require("react");
var Link = require("react-router").Link;

module.exports = React.createClass({
  render: function() {
    var style = {
      default: {
        "padding": "3em"
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
          <li>
            <Link to="TodoApp">Todo Flux App</Link>
          </li>
          <li>
            <Link to="TodoImmutableApp">Todo Flux App w/ Immutable.js</Link>
          </li>
          <li>
            <Link to="ChatApp">Chat Flux App</Link>
          </li>
        </ul>
        <p>Or open the page that shows <Link to="readme">README.md</Link>.</p>
      </div>
    );
  }
});
