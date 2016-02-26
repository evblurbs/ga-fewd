var sessionUtils = {
  createNewSession: function(sessionToken, serverResponse){
    if(sessionToken != 'undefined') {
      serverResponse.setHeader('Set-Cookie', 'session-token=' + sessionToken);
      serverResponse.setHeader('Location', '/fewd8login');
    } else {
      serverResponse.setHeader('Location', '/');
    }
    serverResponse.setHeader('Content-Type', 'text/plain');
    serverResponse.statusCode = 302;
    serverResponse.end();
  }
};

module.exports = sessionUtils;
