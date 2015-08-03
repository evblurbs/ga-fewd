var React = require('react');
var Parse = require('parse').Parse;
var Remove = require('./remove');

var Item = React.createClass({
  renderExtra: function() {
    return (
      <div>
        <span onClick={this.removeMessage} className="message-remove">x</span>
        <span className="message-edit">edit</span>
      </div>
    );
  },

  shouldComponentUpdate: function() {
    return false;
  },

  render: function(){
    var liClass = "message";
    var isCurrentUser = false;

    if(Parse.User.current().attributes.name === this.props.data.author) {
      liClass += " currentUser";
      isCurrentUser = true;
    }

    return(
      <li className={liClass}>
        <img
          src={this.props.data.avatar}
          className="message-img"
        />
        <span className="message-author">{this.props.data.author}:&nbsp;</span>
        <span className="message-text">{this.props.data.message}</span>
        {isCurrentUser ? <Remove message={this.props.data} /> : ""}
      </li>
    );
  }
});

module.exports = Item;
