"use strict";

var React = require('react');

var NoteSummary = React.createClass({
  render: function () {
    var note = this.props.note;
    var title = note.content.substring(
      0,
      note.content.indexOf('\n')
    );
    title = title || note.content;
    return (
      <div className="note-summary">{title}</div>
    );
  }
});

module.exports = NoteSummary;
