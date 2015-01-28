"use strict";

var React = require("react");
var CommentForm = require('./Comment-form.jsx');
var CommentList = require('./Comment-list.jsx');

var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList />
        <CommentForm />
      </div>
    );
  }
});

module.exports = CommentBox;
