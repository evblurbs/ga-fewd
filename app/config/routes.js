var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var Main = require('../components/Main');
var Home = require('../components/Home');
var Messages = require('../components/Messages');

var routes = (
  <Route handler={Main} >
    <Route name="home" path="/" handler={Home} />
    <Route name="messages" path="/messages" handler={Messages} />
  </Route>
);

module.exports = routes;
