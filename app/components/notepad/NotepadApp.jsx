"use strict";

var React = require('react');

var Notepad= require('./Notepad.jsx');

var NotepadApp = React.createClass({
  getDefaultProps: function() {
    return {
      notepad: {
        selectedId: null,
        notes: []
      }
    };
  },

  render: function () {
    return (
      <Notepad notepad={this.props.notepad} />
    );
  }
});

module.exports = NotepadApp;
