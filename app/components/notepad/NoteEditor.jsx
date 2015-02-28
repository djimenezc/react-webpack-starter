"use strict";

var React = require('react');

var NoteEditor = React.createClass({
  onChange: function (event) {
    this.props.onChange(this.props.note.id, event.target.value);
    console.log(event.target.value);
  },

  render: function () {
    return (
      <textarea rows={5} cols={40} value={this.props.note.content} onChange={this.onChange}/>
    );
  }
});

module.exports = NoteEditor;
