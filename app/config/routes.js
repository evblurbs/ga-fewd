var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var Main = require('../components/Main');
var Home = require('../components/Home');
var Messages = require('../components/Messages');
var Lessons = require('../components/Lessons');
var LessonDetail = require('../components/Lessons/Detail');
var Logout = require('../components/Logout');
var Profile = require('../components/Profile');

var routes = (
  <Route handler={Main} >
    <Route name="home" path="/" handler={Lessons} />
    <Route name="messages" path="/messages" handler={Messages} />
    <Route name="profile" path="/profile" handler={Profile} />
    <Route name="lessons" path="/lessons" handler={Lessons} />
    <Route name="lessonDetail" path="/lessons/:id" handler={LessonDetail} />
    <Route name="logout" path="/logout" handler={Logout} />
  </Route>
);

module.exports = routes;
