var React = require('react');

var Footer = React.createClass({
  shouldComponentUpdate: function() {
    return false;
  },

  render: function() {
    return (
      <footer>
        &copy; {new Date().getFullYear()} General Assembly. Class taught by Evan Johnson and Rick Chen.
      </footer>
    );
  }
});

module.exports = Footer;
