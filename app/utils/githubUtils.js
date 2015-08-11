var appConstants = require('../constants/appConstants');
var https = require('https');
var parseUtils = require('./parseUtils');

var githubUtils = {

  login: function(accessToken, serverResponse) {

    var options = {
      hostname: appConstants.GITHUB_HOSTNAME,
      path: appConstants.GITHUB_API_USER + accessToken,
      method: 'GET',
      headers: {
        'User-Agent': appConstants.GITHUB_UA
      }
    };

    var req = https.request(options, function(res) {
      var body = '';
      res.on('data', function(d) {
        body += d;
      });
      res.on('end', function() {
        var githubData = JSON.parse(body);
        process.stdout.write("ACCESS TOKEN: " + accessToken + "\n");
        parseUtils.serverLogin(githubData, serverResponse, accessToken);
      });
    });
    req.end();
    req.on('error', function(e) {
      console.error(e);
    });

  },

  getEmail: function(user) {
    var options = {
      hostname: appConstants.GITHUB_HOSTNAME,
      path: appConstants.GITHUB_API_EMAILS + user.attributes.access_token,
      method: 'GET',
      headers: {
        'User-Agent': appConstants.GITHUB_UA
      }
    };

    var req = https.request(options, function(res) {
      var body = '';
      res.on('data', function(d) {
        body += d;
      });
      res.on('end', function() {
        var emails = JSON.parse(body);
        console.log("EMAILS: " + emails + "\n");
      });
    });
    req.end();
    req.on('error', function(e) {
      process.stdout.write("ERROR: " + e + "\n");
    });

    return true;
  },

  fetchEmail: function() {
    process.stdout.write("fetching email...");
  }
}

module.exports = githubUtils;
