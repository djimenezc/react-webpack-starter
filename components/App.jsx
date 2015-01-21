"use strict";

var React = require('react');
var CheckboxWithLabel = require('./CheckboxWithLabel.jsx');

// Export React so the dev tools can find it.
// NOTE: Currently dev tools are broken.
(window !== window.top ? window.top : window).React = React;

React.render(
  <CheckboxWithLabel />,
  document.getElementById("content")
);
