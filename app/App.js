var React = require('react');
var Parse = require('parse').Parse;
var AppComponent = require('./AppComponent.js');
var appConstants = require('./constants/appConstants');

Parse.initialize(appConstants.PARSE_APP_ID, appConstants.PARSE_JS_KEY);

React.render(<AppComponent/>, document.body);
