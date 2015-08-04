var React = require('react');
var Parse = require('parse').Parse;
var ParseReact = require('parse-react');
var Item = require('./Item');

var List = React.createClass({
  mixins: [ParseReact.Mixin],

  observe: function() {
    return {
      lessons: (new Parse.Query("Lesson")).descending('createdAt')
    }
  },

  render: function() {
    var lessonList = this.data.lessons.map(function(item, index) {
      return <Item data={item} key={item.id} index={index} />
    });

    return (
      <ul className="lessons-list">{lessonList}</ul>
    );
  }

});

module.exports = List;
