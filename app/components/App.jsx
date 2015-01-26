"use strict";

var React = require("react");
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

var mui = require('material-ui');

require("./App.styl");

var App = React.createClass({

  /** A mixin for components that need to know about the active params, query
   * and routes. Any handler on a route with dynamic segments will want to use
   * this.
   *
   * source -- https://github.com/rackt/react-router/blob/master/docs/api/mixins/State.md
   */
  mixins: [ Router.State ],

  render: function() {

    return (
      <div>
        <h1> App wrapper </h1>
        <RouteHandler />
      </div>
    );
  },

});

module.exports = App;
