var React = require('react');
var BusinessForm = React.createClass({  

  getInitialState: function() {
    return {name: ''};
  },
  handleChange: function(event) {
    this.setState({bizName: event.target.value});
  },

  addBusiness: function(event) {
    this.props.addBusiness(this.state.bizName);
    this.setState({
      name: ""
    });
  },
  render: function() {
    return (
      <div>
      <input
        type="text"
        placeholder ="Enter Business Name"
        value={this.state.bizName}
        onChange={this.handleChange}
      />
      <button onClick = {this.addBusiness}>Submit</button>
      </div>
    );
  }
});

module.exports = BusinessForm;