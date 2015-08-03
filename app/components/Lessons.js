var React = require('react');
var Parse = require('parse').Parse;
var Router = require('react-router');
var Link = Router.Link;

var Lessons = React.createClass({
  getInitialState: function() {
    return {
      isAdmin: false
    }
  },

  componentDidMount: function() {
    var query = (new Parse.Query(Parse.Role));
    query.equalTo("name", "Administrator");
    query.equalTo("users", Parse.User.current());
    query.first().then(function(adminRole) {
      if (adminRole) {
        this.setState({
          isAdmin: true
        });
      }
    }.bind(this));
  },

  renderAddLessonLink: function() {
    return (
      <Link to="addLesson">Add Lesson</Link>
    );
  },

  render: function() {

    return (
      <div>
        <h2>Lessons</h2>
        {this.state.isAdmin ? this.renderAddLessonLink() : ''}
      </div>
    );
  }
});

module.exports = Lessons;
