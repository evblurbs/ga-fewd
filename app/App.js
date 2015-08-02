var React = require('react');
var Parse = require('parse').Parse;
var appConstants = require('./constants/appConstants');

var Router = require('react-router');
var routes = require('./config/routes');

Parse.initialize(appConstants.PARSE_APP_ID, appConstants.PARSE_JS_KEY);

Router.run(routes, function(Handler){
  React.render(<Handler /> , document.getElementById('app'));
});

