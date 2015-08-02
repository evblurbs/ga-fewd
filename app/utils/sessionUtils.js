var sessionUtils = {
  createNewSession: function(sessionToken, serverResponse){
    serverResponse.writeHead(302, {
      'Set-Cookie': 'session-token=' + sessionToken,
      'Location' : '/',
      'Content-Type': 'text/plain'
    });
    serverResponse.end();

  }
};

module.exports = sessionUtils;

