var React = require('react');
var Item = require('./Item');

var List = React.createClass({
  render: function() {
    var homeworkItems = this.props.list.map(function(item, index) {
      return <Item key={index} data={item} />
    });
    return (
      <ul className="list">{homeworkItems}</ul>
    );
  }
});

module.exports = List;
