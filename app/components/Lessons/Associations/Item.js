var React = require('react');

var Item = React.createClass({
  renderLink: function() {
    return(
      <a href={this.props.data.url} target="_blank" className="list-link">{this.props.data.urlText}</a>
    );
  },

  render: function() {
    return(
      <li>
        <h3>{this.props.data.title}</h3>
        {this.props.data.url && this.props.data.urlText ? this.renderLink() : ''}
        <p>{this.props.data.description}</p>
      </li>
    );
  }
});

module.exports = Item;
