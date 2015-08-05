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
          <div className="section-break clearfix">
            <h2>Homework</h2>
            {this.state.data.homework.length ? <Associations list={this.state.data.homework} /> : '' }
          </div>
          <div className="section-break clearfix">
            <h2>Supplemental Work</h2>
            {this.state.data.supplemental.length ? <Associations list={this.state.data.supplemental} /> : '' }
          </div>
        </div>
      );
    }
  }
});

module.exports = Detail;
