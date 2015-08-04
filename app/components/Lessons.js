var React = require('react');
var LessonsList = require('./Lessons/List');
var AddLesson = require('./Lessons/Add');


var Lessons = React.createClass({
  render: function() {
    return (
      <div>
        <LessonsList />
        <AddLesson />
      </div>
    );
  }
});

module.exports = Lessons;
