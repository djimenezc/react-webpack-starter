"use strict";

var React = require("react");
var marked = require('marked');

var Comment = React.createClass({
  render: function() {
    // var text = this.props.children.toString()
    // console.log(this.props);
    var rawMarkup = marked(this.props.children.toString());
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        <span dangerouslySetInnerHTML={{__html: rawMarkup}} />
      </div>
    );
  }
});

module.exports = Comment;
