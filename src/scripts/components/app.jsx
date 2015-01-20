'use strict';

var React = require('react/addons');
var ClickCounter = require('./clickCounter');

var ReactTransitionGroup = React.addons.TransitionGroup;

// Export React so the devtools can find it
(window !== window.top ? window.top : window).React = React;

// styles
require('../../styles/normalize.css');
require('../../styles/main.styl');

var imageURL = require('../../images/react-logo-1000-transparent.png');

var App = React.createClass({
  render: function() {
    return (
      <div className='main'>
        <ReactTransitionGroup transitionName="fade">
          <img src={imageURL} />
        </ReactTransitionGroup>
      </div>
    );
  }
});

React.render(
  <App/>,
  document.getElementById('content')
);


// React.render(
//   <ClickCounter/>,
//   document.getElementById('content')
// );
//
