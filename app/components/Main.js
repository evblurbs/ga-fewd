var React = require('react');
var Parse = require('parse').Parse;
var ParseReact = require('parse-react');
var cookieUtils = require('../utils/cookieUtils');

var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

var Nav = require('./Nav');

var Main = React.createClass({
  mixins: [ParseReact.Mixin],

  observe: function() {
    return {
      user: ParseReact.currentUser
    }
  },

  componentDidMount: function() {
    sessionToken = cookieUtils.getItem("session-token");
    if(!this.data.user && sessionToken){
      Parse.User.become(sessionToken).then(function(user){
        ParseReact.currentUser.update()
      })
    }

  },

  render: function() {
    if(this.data.user) {
      return (
        <div>
          <Nav />
          <RouteHandler />
        </div>
      );
    } else {
      return (
        <a href="/login">Login</a>
      );
    }
  }
});

module.exports = Main;

