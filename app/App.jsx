"use strict";

var React = require("react");
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

var mui = require('material-ui');
var AppBar = mui.AppBar;
var AppCanvas = mui.AppCanvas;
var IconButton = mui.IconButton;
var AppLeftNav = require('./app-left-nav.jsx');

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

    var title =
      this.isActive('get-started') ? 'Get Started' :
      this.isActive('css-framework') ? 'Css Framework' :
      this.isActive('components') ? 'Components' : "React Webpack Starter";

    var githubButton = (
      <IconButton
        className="github-icon-button"
        icon="mui-icon-github"
        href="https://github.com/callemall/material-ui"
        linkButton={true} />
    );

    return (
      <AppCanvas predefinedLayout={1}>

        <AppBar
          className="mui-dark-theme"
          onMenuIconButtonTouchTap={this._onMenuIconButtonTouchTap}
          title={title}
          zDepth={0}>
          {githubButton}
        </AppBar>

        <AppLeftNav ref="leftNav" />

        <RouteHandler />

        <div className="footer full-width-section mui-dark-theme">
          <p>
            Footer Placeholder
          </p>
        </div>

      </AppCanvas>
    );
  },

  // TODO: explain what this does.
  _onMenuIconButtonTouchTap: function() {
    this.refs.leftNav.toggle();
  }
});

module.exports = App;
