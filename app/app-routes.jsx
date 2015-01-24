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
var GetStarted = require('./components/material-ui/pages/get-started.jsx');

var CssFramework = require('./components/material-ui/pages/css-framework.jsx');
var Colors = require('./components/material-ui/pages/css-framework/colors.jsx');
var Typography = require('./components/material-ui/pages/css-framework/typography.jsx');

var Components = require('./components/material-ui/pages/components.jsx');
var Buttons = require('./components/material-ui/pages/components/buttons.jsx');
var DatePicker = require('./components/material-ui/pages/components/date-picker.jsx');
var Dialog = require('./components/material-ui/pages/components/dialog.jsx');
var DropDownMenu = require('./components/material-ui/pages/components/drop-down-menu.jsx');
var IconButtons = require('./components/material-ui/pages/components/icon-buttons.jsx');
var Icons = require('./components/material-ui/pages/components/icons.jsx');
var LeftNav = require('./components/material-ui/pages/components/left-nav.jsx');
var Menus = require('./components/material-ui/pages/components/menus.jsx');
var Paper = require('./components/material-ui/pages/components/paper.jsx');
var Sliders = require('./components/material-ui/pages/components/sliders.jsx');
var Snackbar = require('./components/material-ui/pages/components/snackbar.jsx');
var Switches = require('./components/material-ui/pages/components/switches.jsx');
var Tabs = require('./components/material-ui/pages/components/tabs.jsx');
var TextFields = require('./components/material-ui/pages/components/text-fields.jsx');
var Toolbars = require('./components/material-ui/pages/components/toolbars.jsx');

/** Routes are used to declare your view hierarchy.
  *
  * Say you go to http://localhost:8080/#/components/paper
  * The react router will search for a route named 'paper' and will recursively render its
  * handler and its parent handler like so: Paper > Components > Master
  *
  * source -- https://github.com/callemall/material-ui
  */

var AppRoutes = (
  <Route name="root" path="/" handler={App}>
    <Route name="checkbox" handler={Checkbox} />
    <Route name="some-page" handler={SomePage} />

    <Route name="material-ui" handler={MaterialUI}>
      <Route name="get-started" handler={GetStarted} />

      <Route name="css-framework" handler={CssFramework}>
        <Route name="colors" handler={Colors} />
        <Route name="typography" handler={Typography} />
        <Redirect from="/css-framework" to="colors" />
      </Route>

      <Route name="components" handler={Components}>
        <Route name="buttons" handler={Buttons} />
        <Route name="date-picker" handler={DatePicker} />
        <Route name="dialog" handler={Dialog} />
        <Route name="dropdown-menu" handler={DropDownMenu} />
        <Route name="icon-buttons" handler={IconButtons} />
        <Route name="icons" handler={Icons} />
        <Route name="left-nav" handler={LeftNav} />
        <Route name="menus" handler={Menus} />
        <Route name="paper" handler={Paper} />
        <Route name="sliders" handler={Sliders} />
        <Route name="switches" handler={Switches} />
        <Route name="snackbar" handler={Snackbar} />
        <Route name="tabs" handler={Tabs} />
        <Route name="text-fields" handler={TextFields} />
        <Route name="toolbars" handler={Toolbars} />
        <Redirect from="/components" to="buttons" />
      </Route>
    </Route>

    <DefaultRoute name="home" handler={Home} />
  </Route>
);

module.exports = AppRoutes;
