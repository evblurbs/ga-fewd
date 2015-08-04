var React = require('react');
var LessonsList = require('./Lessons/List');
var AddLesson = require('./Lessons/Add');


var Lessons = React.createClass({
  render: function() {
    return (
      <div>
        <div className="header-section">
          <h1>Lessons</h1>
          <p className="lg">Below is a list of the lessons for our FEWD course. Lessons will be published shortly before each class. Click through to view the individual lesson pages, which contain a description of the material, link to the lesson's slides, homework, and supplemental work.</p>
        </div>
        <div className="clearfix"></div>
        <LessonsList />
        {/*<AddLesson />*/}
      </div>
    );
  }
});

module.exports = Lessons;
