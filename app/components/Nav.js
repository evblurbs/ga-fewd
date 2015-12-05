var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Nav = React.createClass({
  renderWelcome: function() {
    return (
      <span className="welcome">welcome</span>
    );
  },

  renderWelcomeUser: function() {
    var divStyle = {
      backgroundImage: 'url(' + this.props.user.avatar_url + ')'
    };

    return (
      <Link to="profile" className="welcome">
        <span id='avatar' style={divStyle}></span>
        welcome, {this.props.user.username}
      </Link>
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
            {this.renderWelcomeUser()}
            <ul>
              <li>
                <Link to="home">Lessons</Link>
              </li>
              <li>
                <Link to="cohort">Cohort</Link>
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
                <a href="/login2">Login</a>
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
