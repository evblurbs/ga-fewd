var appConstants = require('../constants/appConstants');
var https = require('https');
var parseUtils = require('./parseUtils');
var axios = require('axios');

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

  getEmail: function(user, cb) {
    // save email callback
    this.emailCb = cb;
    this.user = user;
    axios.get(appConstants.GITHUB_API_EMAILS + user.attributes.access_token)
      .then(function(response) {
        response.data.forEach(function(item) {
          if(item.primary) {
            this.emailCb(this.user, {
              email: item.email
            });
          }
        }.bind(this));
      }.bind(this))
      .catch(function(response) {
        console.log(response);
      });
  },

  updateAvatar: function(user, accessToken, cb) {
    var data = {
      user: user,
      cb: cb
    };
    axios.get(appConstants.GITHUB_API_USER_FULL + accessToken)
      .then(function(response) {
        var data = {
          avatar_url: response.data.avatar_url
        };
        this.cb(this.user, data);
      }.bind(data))
      .catch(function(response) {
        console.log(response);
      });
  },
}

module.exports = githubUtils;
