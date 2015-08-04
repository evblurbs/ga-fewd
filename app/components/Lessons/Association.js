var React = require('react');

var Assocation = React.createClass({
  renderLink: function() {
    return(
      <a href={this.props.data.link} target="_blank">{this.props.data.linkText}</a>
    );
  },

  render: function() {
    return(
      <li>
        <h3>{this.props.data.title}</h3>
        {this.props.data.link && this.props.data.linkText ? this.renderLink() : ''}
        <p>{this.props.data.description}</p>
      </li>
    );
  }
});

module.exports = Assocation;
