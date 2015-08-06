var React = require('react');
var Router = require('react-router');
var Parse = require('parse').Parse;
var Associations = require('./Associations/List');
var lessonStore = require('../../stores/lessonStore');

var Detail = React.createClass({
  mixins: [Router.State],

  getInitialState: function() {
    var lessonNumber = this.getParams().id;
    return {
      data: lessonStore.getLesson(lessonNumber),
    }
  },

  renderSection: function(section) {
    return (
      <div className="section-break clearfix">
        <h2>{section}</h2>
        <Associations list={this.state.data[section]} />
      </div>
    );
  },

  render: function() {
    if(this.state.data) {
      return(
        <div>
          <div className="header-section">
            <h1>{this.state.data.title}</h1>
            <p className="lg">{this.state.data.description}</p>
          </div>
          <div className="section-break clearfix">
            <h2>Slides</h2>
            <a href={this.state.data.slides} target="_blank" className="button">View Slides</a>
          </div>
          {this.state.data.Homework ? this.renderSection('Homework') : '' }
          {this.state.data.Supplemental ? this.renderSection('Supplemental') : '' }
          {this.state.data.Links ? this.renderSection('Links') : '' }
        </div>
      );
    }
  }
});

module.exports = Detail;
