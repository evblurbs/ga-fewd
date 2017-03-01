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
    return (
      <div>
        <nav className="nav group">
          {/*this.renderWelcomeUser()*/}
          <ul>
            <li>
              <Link to="home">Home</Link>
            </li>
            <li>
              <Link to="lessons">Lessons</Link>
            </li>
            {/*<li>
              <Link to="cohort">Cohort</Link>
            </li>
            <li>
              <Link to="logout">Logout</Link>
            </li>*/}
          </ul>
        </nav>
        {this.renderFEWDTitle()}
      </div>
    );

  }
});

module.exports = Nav;
