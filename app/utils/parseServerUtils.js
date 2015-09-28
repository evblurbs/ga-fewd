var Parse = require('parse/node').Parse;
var appConstants = require('../constants/appConstants');
var sessionUtils = require('./sessionUtils');
var https = require('https');

Parse.initialize(appConstants.PARSE_APP_ID, appConstants.PARSE_JS_KEY, appConstants.PARSE_MASTER_KEY);

var parseServerUtils = {
  // function for server side code
  // to call to check if a user exists
  serverLogin: function(githubData, serverResponse, accessToken) {
    var _this = this;

    // Initialize Parse for Server Side queries
    // Enables us to login the user from the
    // server side (remove if we find another way
    // to get the session token)

    Parse.User.enableUnsafeCurrentUser();

    // store github data
    this.githubData = githubData;
    this.serverResponse = serverResponse;
    this.sessionUtils = sessionUtils;
    this.accessToken = accessToken;

    var path = '/1/login?username=';
    path += encodeURIComponent(githubData.login);
    path += '&password=';
    path += encodeURIComponent(String(githubData.id));

    https.get({
      host: 'api.parse.com',
      path: path,
      headers: {
        "X-Parse-Application-Id":appConstants.PARSE_APP_ID,
        "X-Parse-REST-API-Key":appConstants.REST_API_KEY,
      }
    }, function(response) {
      // Continuously update stream with data
      var body = '';
      response.on('data', function(d) {
        body += d;
      });
      response.on('end', function() {
        // Data reception is done, do whatever with it!
        var jsonResponse = JSON.parse(body);
        if(jsonResponse.error){
          process.stdout.write("Error reading from parse API: ");
          process.stdout.write(jsonResponse.error);
        }
        if(jsonResponse.sessionToken) {
          this.sessionUtils.createNewSession(jsonResponse.sessionToken, this.serverResponse);
        } else {
          this.serverSignUp(this.accessToken);
        }
      }.bind(this));
    }.bind(this));
  },

  serverSignUp: function(accessToken) {

    var user = new Parse.User();
    var data = this.githubData;
    user.set("username", data.login);
    user.set("password", String(data.id));
    if(data.email && data.email.length) {
      user.set("email", data.email);
    };
    if(data.avatar_url && data.avatar_url.length) {
      user.set("avatar_url", data.avatar_url);
    }
    if(data.name && data.name.length) {
      user.set("name", data.name);
    }
    if(data.location && data.location.length) {
      user.set("location", data.location);
    }
    if(accessToken && accessToken.length) {
      user.set("access_token", accessToken);
    }

    process.stdout.write("RETURN DATA: \n");
    process.stdout.write(JSON.stringify(data));

    user.signUp(null, {
      success: function(user) {
        // Hooray! User signed up
        sessionUtils.createNewSession(user._sessionToken, this.serverResponse);
        process.stdout.write("USER DATA: ");
        process.stdout.write(JSON.stringify(user));
        process.stdout.write("\n");
      }.bind(this),
      error: function(user, error) {
        console.log("Error: " + error.code + " " + error.message);
        process.stdout.write("ERROR SIGNING UP: ");
        process.stdout.write("Error signing up user: ");
        process.stdout.write(error.code + " " + error.message);
      }
    });
  },
};

module.exports = parseServerUtils;
