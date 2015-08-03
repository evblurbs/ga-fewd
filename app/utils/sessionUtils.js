var sessionUtils = {
  createNewSession: function(sessionToken, serverResponse){
    serverResponse.setHeader('Set-Cookie', 'session-token=' + sessionToken);
    serverResponse.setHeader('Location', '/');
    serverResponse.setHeader('Content-Type', 'text/plain');
    serverResponse.statusCode = 302;
    serverResponse.end();
  }
};

module.exports = sessionUtils;

