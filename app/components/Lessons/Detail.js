var React = require('react');
var Router = require('react-router');
var Parse = require('parse').Parse;
var AddAssociation = require('./AddAssociation');
var Association = require('./Association');

var Detail = React.createClass({
  mixins: [Router.State],

  getInitialState: function() {
    return {
      lesson: null,
      attributes: null,
      homework: [],
      supplemental: []
    }
  },

  getAssocations: function(lesson) {
    var Homework = Parse.Object.extend("Homework");
    var hwQuery = new Parse.Query(Homework);
    hwQuery.equalTo('lesson', lesson);
    hwQuery.find({
      success: function(object) {
        this.setState({
          homework: object
        });
      }.bind(this),
      error: function(error) {
        console.log("Error: " + error.code + " " + error.message);
      }
    });

    var Supplemental = Parse.Object.extend("Supplemental");
    var sQuery = new Parse.Query(Supplemental);
    sQuery.equalTo('lesson', lesson);
    sQuery.find({
      success: function(object) {
        this.setState({
          supplemental: object
        });
      }.bind(this),
      error: function(error) {
        console.log("Error: " + error.code + " " + error.message);
      }
    });
  },

  componentWillMount: function() {
    var Lesson = Parse.Object.extend("Lesson");
    var query = new Parse.Query(Lesson);
    query.equalTo('number', this.getParams().id);
    query.first({
      success: function(lesson) {
        this.setState({
          attributes: lesson.attributes,
          lesson: lesson
        });
        this.getAssocations(lesson);
      }.bind(this),
      error: function(error) {
        console.log("Error: " + error.code + " " + error.message);
      }
    });
  },

  renderHomework: function() {
    var homeworkList = this.state.homework.map(function(item, index) {
      return <Association key={item.id} data={item.attributes} />
    });
    return (
      <ul>{homeworkList}</ul>
    );
  },

  renderSupplemental: function() {
    var supplementalList = this.state.supplemental.map(function(item, index) {
      return <Association key={item.id} data={item.attributes} />
    });
    return (
      <ul>{supplementalList}</ul>
    );
  },

  render: function() {
    if(this.state.lesson) {
      return(
        <div>
          <h1>{this.state.attributes.title}</h1>
          <p>{this.state.attributes.description}</p>
          <div className="lesson-section">
            <h2>Slides</h2>
            <a href={this.state.attributes.slides} target="_blank" className="lesson-slides">View Slides</a>
          </div>
          <div className="lesson-section">
            <h2>Homework</h2>
            {this.state.homework.length ? this.renderHomework() : '' }
            <AddAssociation lesson={this.state.lesson} assocation="Homework" />
          </div>
          <div className="lesson-section">
            <h2>Supplemental Work</h2>
            {this.state.supplemental.length ? this.renderSupplemental() : '' }
            <AddAssociation lesson={this.state.lesson} assocation="Supplemental" />
          </div>
        </div>
      );
    } else {
      return (
        <div>
        </div>
      );
    }
  }
});

module.exports = Detail;
