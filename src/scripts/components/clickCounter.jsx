// 'use strict';

var React = require('react/addons');

var ClickCounter = React.createClass({
  getInitialState: function() {
    return {
      numClicks: 0
    };
  },

  onClick: function() {
    return this.setState({
      numClicks: this.state.numClicks + 1
    });
  },

  render: function() {
    return (
      <div onClick={this.onClick}>
        {this.state.numClicks} clicks
      </div>
    );
  }
});

module.exports = ClickCounter;
