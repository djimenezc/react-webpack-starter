"use strict";

var React = require("react");
var Router = require("react-router");
var Route = Router.Route;
var Redirect = Router.Redirect;
var DefaultRoute = Router.DefaultRoute;

// Define Application components
var App = require('./App.jsx');
var Home = require('./components/Home.jsx');
var Checkbox = require('./components/Checkbox.jsx');
var SomePage = require('./components/SomePage.jsx');
var MaterialUI = require('./components/Material-ui.jsx');

// Define material-ui components.
// var Home = require('./Material-ui/pages/home.jsx');
// var GetStarted = require('./Material-ui/pages/get-started.jsx');
//
// var CssFramework = require('./Material-ui/pages/css-framework.jsx');
// var Colors = require('./Material-ui/pages/css-framework/colors.jsx');
// var Typography = require('./Material-ui/pages/css-framework/typography.jsx');
//
// var Components = require('./Material-ui/pages/components.jsx');
// var Buttons = require('./Material-ui/pages/components/buttons.jsx');
// var DatePicker = require('./Material-ui/pages/components/date-picker.jsx');
// var Dialog = require('./Material-ui/pages/components/dialog.jsx');
// var DropDownMenu = require('./Material-ui/pages/components/drop-down-menu.jsx');
// var IconButtons = require('./Material-ui/pages/components/icon-buttons.jsx');
// var Icons = require('./Material-ui/pages/components/icons.jsx');
// var LeftNav = require('./Material-ui/pages/components/left-nav.jsx');
// var Menus = require('./Material-ui/pages/components/menus.jsx');
// var Paper = require('./Material-ui/pages/components/paper.jsx');
// var Sliders = require('./Material-ui/pages/components/sliders.jsx');
// var Snackbar = require('./Material-ui/pages/components/snackbar.jsx');
// var Switches = require('./Material-ui/pages/components/switches.jsx');
// var Tabs = require('./Material-ui/pages/components/tabs.jsx');
// var TextFields = require('./Material-ui/pages/components/text-fields.jsx');
// var Toolbars = require('./Material-ui/pages/components/toolbars.jsx');

/** Routes are used to declare your view hierarchy.
  *
  * Say you go to http://localhost:8080/#/components/paper
  * The react router will search for a route named 'paper' and will recursively render its
  * handler and its parent handler like so: Paper > Components > Master
  *
  * source -- https://github.com/callemall/material-ui
  */
    // <Route name="mui" path="/material-ui" handler={MaterialUI} />

var AppRoutes = (
  <Route name="root" path="/" handler={App}>
    <Route name="checkbox" path="/checkbox" handler={Checkbox} />
    <Route name="some-page" path="/some-page" handler={SomePage} />

    <DefaultRoute name="home" handler={Home} />
  </Route>
);
  // <Route name="root" path="/" handler={Master}>
  //   <Route name="home" handler={Home} />
  //   <Route name="get-started" handler={GetStarted} />
  //   <Route name="css-framework" handler={CssFramework}>
  //     <Route name="colors" handler={Colors} />
  //     <Route name="typography" handler={Typography} />
  //     <Redirect from="/css-framework" to="colors" />
  //   </Route>
  //
  //   <Route name="components" handler={Components}>
  //     <Route name="buttons" handler={Buttons} />
  //     <Route name="date-picker" handler={DatePicker} />
  //     <Route name="dialog" handler={Dialog} />
  //     <Route name="dropdown-menu" handler={DropDownMenu} />
  //     <Route name="icon-buttons" handler={IconButtons} />
  //     <Route name="icons" handler={Icons} />
  //     <Route name="left-nav" handler={LeftNav} />
  //     <Route name="menus" handler={Menus} />
  //     <Route name="paper" handler={Paper} />
  //     <Route name="sliders" handler={Sliders} />
  //     <Route name="switches" handler={Switches} />
  //     <Route name="snackbar" handler={Snackbar} />
  //     <Route name="tabs" handler={Tabs} />
  //     <Route name="text-fields" handler={TextFields} />
  //     <Route name="toolbars" handler={Toolbars} />
  //     <Redirect from="/components" to="buttons" />
  //   </Route>
  //
  //   <DefaultRoute handler={Home}/>
  // </Route>

module.exports = AppRoutes;
