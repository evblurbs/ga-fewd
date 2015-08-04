var React = require('react');
var Router = require('react-router');

var Item = React.createClass({
  mixins : [Router.Navigation],

  gotoLesson: function() {
    this.transitionTo('lessonDetail', { id: this.props.data.number });
  },

  formatDescription: function(desc) {
    return desc.substring(0,160) + '...';
  },

  render: function() {
    return (
      <li className="lesson-item" onClick={this.gotoLesson}>
        <h2 className="lesson-number">{this.props.data.number}</h2>
        <h2 className="lesson-title">{this.props.data.title}</h2>
        <p>{this.props.data.date} <span>|</span> {this.formatDescription(this.props.data.description)}</p>
      </li>
    );
  }
});

module.exports = Item;
