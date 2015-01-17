var React = require('react');

var CheckboxWithLabel = React.createClass({
  getInitialState: function() {
    return {
      isChecked: false
    };
  },

  onChange: function() {
    this.setState(isChecked: !this.state.isChecked)
  },

  render: function() {
    return (
      <label>
        <input
          type="checkbox"
          checked={@state.isChecked}
          onChange={@onChange}
        />
        {@state.isChecked ? @props.labelOn : @props.labelOff}
      </label>
    );
  }
});

module.exports = CheckboxWithLabel;
