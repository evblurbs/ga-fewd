var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Nav = React.createClass({
  renderWelcome: function() {
    return (
      <span className="welcome">welcome</span>
    );
  },

  renderFEWDTitle: function() {
    return (
      <span className="fewd">FEWD</span>
    );
  },

  render: function() {
    if (this.props.user) {
      return (
        <div>
          <nav className="nav group">
            {this.renderWelcome()}
            <ul>
              <li>
                <Link to="lessons">Lessons</Link>
              </li>
              <li>
                <Link to="logout">Logout</Link>
              </li>
            </ul>
          </nav>
          {this.renderFEWDTitle()}
        </div>
      );
    } else {
      return (
        <div>
          <nav className="nav group">
            {this.renderWelcome()}
            <ul>
              <li>
                <a href="/login">Login</a>
              </li>
            </ul>
          </nav>
          {this.renderFEWDTitle()}
        </div>
      );
    }
  }
});

module.exports = Nav;
