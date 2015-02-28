"use strict";

var React = require('react');

var NoteSummary = require('./NotesSummary.jsx');

var NotesList = React.createClass({
  render: function () {
    var notes = this.props.notepad.notes;
    return (
      <div className="note-list">
        {
          notes.map(function (note) {
            return (
              <NoteSummary key={note.id} note={note} />
            );
          })
        }
      </div>
    );
  }
});

module.exports = NotesList;
