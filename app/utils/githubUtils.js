var axios = require('axios');
var appConstants = require('../constants/appConstants');

var githubUtils = {

  login: function(accessToken) {
    return axios.get(appConstants.GITHUB_API_USER + accessToken);
  },

  getUserInfo: function() {
    console.log('getting user info');
    return 'say what!?';
  }
}

module.exports = githubUtils;
