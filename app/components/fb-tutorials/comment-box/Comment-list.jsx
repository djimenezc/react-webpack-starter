"use strict";

var React = require("react");
var Comment = require("./Comment.jsx");

var CommentList = React.createClass({
  render: function() {
    console.log(this.props.data);
    var commentNodes = this.props.data["_data"].map(function(comment, index) {
      return (
        // `key` is a React-specific concept and is not mandatory for the
        // purpose of this tutorial. if you're curious, see more here:
        // http://facebook.github.io/react/docs/multiple-components.html#dynamic-children
        <Comment author={comment.author} key={index}>
          {comment.text}
        </Comment>
      );
    });

    return (
      <div className="commentList">
        {commentNodes}
      </div>
    );
  }
});

module.exports = CommentList;
