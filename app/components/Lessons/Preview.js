var React = require('react');
var Router = require('react-router');

var Preview = React.createClass({
  mixins : [Router.Navigation],

  gotoLesson: function() {
    this.transitionTo('lessonDetail', { id: this.props.data.number });
  },

  formatDescription: function(desc) {
    return desc.substring(0,160) + '...';
  },

  render: function() {
    return (
      <li className="lesson-item clearfix section-break" onClick={this.gotoLesson}>
        <h2 className="lesson-number">{this.props.data.number}</h2>
        <div className="lesson-info">
          <h2 className="lesson-title">{this.props.data.title}</h2>
          <p>{this.props.data.date} <span className="date-pipe">|</span> {this.formatDescription(this.props.data.description)}</p>
        </div>
      </li>
    );
  }
});

module.exports = Preview;
