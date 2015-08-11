var appConstants = require('../constants/appConstants');
var https = require('https');
var parseUtils = require('./parseUtils');

var githubUtils = {

  login: function(accessToken, serverResponse) {

    var options = {
      hostname: 'api.github.com',
      path: '/user?access_token=' + accessToken,
      method: 'GET',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.8.1.13) Gecko/20080311 Firefox/2.0.0.13'
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

}

module.exports = githubUtils;
