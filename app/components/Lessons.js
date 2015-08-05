var React = require('react');
var lessonStore = require('../stores/lessonStore');
var LessonPreview = require('./Lessons/Preview');


var Lessons = React.createClass({
  getInitialState: function() {
    return {
      lessons: lessonStore.getLessons()
    }
  },

  render: function() {
    var lessons = this.state.lessons.map(function(item, index) {
      return <LessonPreview data={item} key={item.number} index={index} />
    });

    return (
      <div>
        <div className="header-section">
          <h1>Lessons</h1>
          <p className="lg">Below is a list of the lessons for our FEWD course. Lessons will be published shortly before each class. Click through to view the individual lesson pages, which contain a description of the material, link to the lesson's slides, homework, and supplemental work.</p>
        </div>
        <div className="clearfix"></div>
        <ul className="lesson-list">{lessons}</ul>
      </div>
    );
  }
});

module.exports = Lessons;
