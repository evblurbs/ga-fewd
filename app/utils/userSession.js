var userSession = {
  createNewSession: function(sessionToken, serverResponse){
    serverResponse.writeHead(302, {
      'Set-Cookie': 'session=' + sessionToken,
      'Location' : '/',
      'Content-Type': 'text/plain'
    });
    serverResponse.end();

  }
};

module.exports = userSession;

