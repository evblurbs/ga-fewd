var React = require('react');
var Parse = require('parse').Parse;

var AddLesson = React.createClass({
  getInitialState: function() {
    return {
      isAdmin: false,
      isCheckingPermissions: true
    }
  },

  componentDidMount: function() {
    var query = (new Parse.Query(Parse.Role));
    query.equalTo("name", "Administrator");
    query.equalTo("users", Parse.User.current());
    query.first().then(function(adminRole) {
      if (adminRole) {
        this.setState({
          isAdmin: true,
          isCheckingPermissions: false
        });
      } else {
        this.setState({
          isAdmin: false,
          isCheckingPermissions: false
        });
      }
    }.bind(this));
  },

  renderAddLesson: function() {
    if(this.state.isAdmin) {
      return (
        <h2>Add Lesson</h2>
      );
    } else {
      return (
        <h2>Admin priveleges required.</h2>
      );
    }
  },

  render: function() {
    return (
      <div>
      {!this.state.isCheckingPermissions ? this.renderAddLesson() : ''}
      </div>
    );
  }
});

module.exports = AddLesson;
