"use strict";

var React = require("react");
var Router = require("react-router");
var AppRoutes = require("../app/components/" + __resourceQuery.substr(1) + "-routes");
var injectTapEventPlugin = require("react-tap-event-plugin");

// Export React so the dev tools can find it.
(window !== window.top ? window.top : window).React = React;

//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

// Render the main app component
Router
  // similar to a router initializer method.
  .create({
    routes: AppRoutes,
    location: Router.HistoryLocation,
    scrollBehavior: Router.ScrollToTopBehavior
  })
  // This is our callback function, whenever the url changes it will be called again.
  // Handler: The ReactComponent class that will be rendered
  // source -- https://github.com/callemall/material-ui
  .run(function (Handler, state) {
    React.render(<Handler />, document.getElementById("content"));
  });
