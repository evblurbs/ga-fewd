var React = require('react');
var cookieUtils = require('../utils/cookieUtils');
var parseUtils = require('../utils/parseUtils');

var Logout = React.createClass({
  componentWillMount: function() {
    cookieUtils.removeItem('session-token');
    parseUtils.logout();
  },

  render: function() {
    return (
      <div className="header-section">
        <h2>Logging out...</h2>
      </div>
    );
  }
});

module.exports = Logout;
