var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var Main = require('../components/Main');
var Home = require('../components/Home');
var Messages = require('../components/Messages');
var Lessons = require('../components/Lessons');
var AddLesson = require('../components/Lessons/Add');

var routes = (
  <Route handler={Main} >
    <Route name="home" path="/" handler={Home} />
    <Route name="messages" path="/messages" handler={Messages} />
    <Route name="lessons" path="/lessons" handler={Lessons} />
    <Route name="addLesson" path="/lessons/add" handler={AddLesson} />
  </Route>
);

module.exports = routes;
