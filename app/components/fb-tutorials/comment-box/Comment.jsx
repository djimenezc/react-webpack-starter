"use strict";

var React = require("react");
var marked = require('marked');

var Comment = React.createClass({
  render: function() {
    // var rawMarkup = marked(this.props.children.toString());
        // <span dangerouslySetInnerHTML={{__html: rawMarkup}} />
    console.log(this.props);
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
      </div>
    );
  }
});

module.exports = Comment;
