var React = require('react');
var Parse = require('parse').Parse;
var ParseReact = require('parse-react');
var Item = require('./Item');

var timeoutId;

var List = React.createClass({
  mixins: [ParseReact.Mixin],

  observe: function() {
    return {
      messages: (new Parse.Query("Message")).ascending('createdAt')
    }
  },

  componentDidMount: function() {
    timeoutId = window.setTimeout(this.refresh, 3000);
  },

  refresh: function() {
    this.refreshQueries();
    timeoutId = window.setTimeout(this.refresh, 3000);
  },

  componentWillUnmount: function() {
    window.clearTimeout(timeoutId);
  },

  render: function() {
    //debugger;
    var messageList = this.data.messages.map(function(item, index){
      return <Item data={item} key={item.id} />
    });

    return (
      <ul>{messageList}</ul>
    );
  }
});

module.exports = List;
