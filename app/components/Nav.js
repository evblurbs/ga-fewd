var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Nav = React.createClass({
  renderWelcome: function() {
    return (
      <span className="welcome">welcome</span>
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
                <a href="#">Logout</a>
              </li>
            </ul>
          </nav>
          <h1 className="title">FEWD</h1>
        </div>
      );
    } else {
      return (
        <div>
          <nav>
            {this.renderWelcome()}
            <ul>
              <li>
                <a href="/login">Login</a>
              </li>
            </ul>
          </nav>
          <h1 className="title">FEWD</h1>
        </div>
      );
    }
  }
});

module.exports = Nav;
