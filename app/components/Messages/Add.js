var React = require('react');
var Parse = require('parse').Parse;
var ParseReact = require('parse-react');

var AddMessage = React.createClass({
  mixins: [ParseReact.Mixin],

  observe: function() {
    return {}
  },

  checkEnter: function(event) {
    if(event.keyCode==13){
      this.submitMessage();
    };
  },

  submitMessage: function() {
    var messageField = React.findDOMNode(this.refs.addMessage);
    var message = messageField.value;

    if(!message.length) {
      return;
    }

    ParseReact.Mutation.Create('Message', {
      user: Parse.User.current(),
      avatar: Parse.User.current().attributes.avatar_url,
      author: Parse.User.current().attributes.name,
      message: message
    }).dispatch();

    messageField.value = "";
  },

  render: function() {
    return (
      <div>
        <input
          ref="addMessage"
          placeholder="Add message.."
          className="messages-addInput"
          onKeyDown={this.checkEnter}
          />
        <button
          onClick={this.submitMessage}
          className="messages-addButton"
          >Submit</button>
      </div>
    );
  }
});

module.exports = AddMessage;
