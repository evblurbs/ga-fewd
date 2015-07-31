var Parse = require('parse').Parse;
var appConstants = require('../constants/appConstants');
var userSession = require('./userSession');

var parseUtils = {
  // function for server side code
  // to call to check if a user exists
  serverLogin: function(githubData, serverResponse) {
    var _this = this;

    // Initialize Parse for Server Side queries
    Parse.initialize(appConstants.PARSE_APP_ID, appConstants.PARSE_JS_KEY);
    // Enables us to login the user from the
    // server side (remove if we find another way
    // to get the session token)
    Parse.User.enableUnsafeCurrentUser();

    // store github data
    this.githubData = githubData;
    this.serverResponse = serverResponse;

    var findUser = function(githubData) {

      var User = Parse.Object.extend("User");
      var query = new Parse.Query(User);
      query.equalTo("username", githubData.login);
      query.first({
        success: function(user) {
          // Successfully retrieved the user.
          if(user) {
            // TODO: Figure out way to get the
            // session token without loggin the user in?
            Parse.User.logIn(githubData.login, githubData.id, {
              success: function(userLoginResponse) {
                // Do stuff after successful login.
                userSession.createNewSession(userLoginResponse._sessionToken, this.serverResponse);
              }.bind(this),
              error: function(user, error) {
                console.log("Error: " + error.code + " " + error.message);
              }
            });
          } else {
            this.serverSignUp();
          }
        }.bind(_this),
        error: function(error) {
          console.log("Error: " + error.code + " " + error.message);
        }
      });
    };

    findUser(githubData);

  },

  serverSignUp: function() {

    var user = new Parse.User();
    user.set("username", this.githubData.login);
    user.set("password", String(this.githubData.id));
    user.set("email", this.githubData.email);
    user.set("avatar_url", this.githubData.avatar_url);
    user.set("name", this.githubData.name);
    user.set("location", this.githubData.location);

    user.signUp(null, {
      success: function(user) {
        // Hooray! User signed up
        userSession.createNewSession(user._sessionToken, this.serverResponse);
      }.bind(this),
      error: function(user, error) {
        console.log("Error: " + error.code + " " + error.message);
      }
    });
  },


  login: function(githubData) {

  }

};

module.exports = parseUtils;
