var React = require('react');

var Footer = React.createClass({
  shouldComponentUpdate: function() {
    return false;
  },

  render: function() {
    return (
      <footer>
        &copy; {new Date().getFullYear()} General Assembly. Class taught by Brian Cama and Sarah McAlear.
      </footer>
    );
  }
});

module.exports = Footer;
