var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Nav = React.createClass({
  render: function() {
    return (
      <ul>
        <li>
          <Link to="home">Home</Link>
        </li>
        <li>
          <Link to="lessons">Lessons</Link>
        </li>
        <li>
          <Link to="messages">Messages</Link>
        </li>
      </ul>
    );
  }
});

module.exports = Nav;
