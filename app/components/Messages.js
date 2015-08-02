var React = require('react');
var MessagesList = require('./Messages/List');
var Add = require('./Messages/Add');

var Messages = React.createClass({
  render: function() {
    return (
      <div>
        <MessagesList />
        <Add />
      </div>
    );
  }
});

module.exports = Messages;
