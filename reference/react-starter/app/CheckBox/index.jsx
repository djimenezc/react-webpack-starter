var React = require("react");
var Link = require("react-router").Link;

var CheckBox = React.createClass({
  render: function() {
    return <div>
    <h2>CheckBox</h2>
    <Link to="home">Home</Link>
    <p>This is just some page...</p>
    </div>;
  }
});

module.exports = CheckBox;
