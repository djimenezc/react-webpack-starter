"use strict";

var React = require('react/addons');
var _ = require('lodash');
var update = React.addons.update;

var NoteEditor = require('./NoteEditor.jsx');
var NotesList = require('./NotesList.jsx');

var Notepad = React.createClass({
  getInitialState: function () {
    return {
      nextNodeId: 1,
      notepad: {
        selectedId: null,
        notes: []
      }
    };
  },

  onAddNote: function () {
    var note = {id: this.state.nextNodeId, content: 'lala'};
    var newState = update(this.state, {
      nextNodeId: {$set: this.state.nextNodeId + 1},
      notepad: {
        selectedId: {$set: note.id},
        notes: {$push: [note]}
      }
    });
    this.setState(newState);
  },

  onChangeNote: function (id, value) {
    var note = _.find(this.state.notepad.notes, function (note) {
      return note.id === id;
    });
    if (note) {
      var newNoteState = update(note, {
        content: {$set: value}
      });
      this.setState(newNoteState);
    }
  },

  render: function () {
    var notepad = this.state.notepad;
    var editor = null;
    var selectedNote = _.find(notepad.notes, function (note) {
      return note.id === notepad.selectedId;
    });

    if (selectedNote) {
      console.log(selectedNote);
      editor = (
        <NoteEditor note={selectedNote} onChange={this.onChangeNote} />
      );
    }

    return (
      <div id="notepad">
        <NotesList notepad={this.state.notepad}/>
        <div><button onClick={this.onAddNote}>Add note</button></div>
        {editor}
      </div>
    );
  }
});

module.exports = Notepad;
