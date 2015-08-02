var React = require('react');
var Parse = require('parse').Parse;
var ParseReact = require('parse-react');

var Remove = React.createClass({
  mixins: [ParseReact.Mixin],

  observe: function() {
    return {}
  },

  removeMessage: function() {
    ParseReact.Mutation.Destroy(this.props.message).dispatch();
  },

  render: function(){
    return(
      <span onClick={this.removeMessage}>remove</span>
    )
  }
})

module.exports = Remove;

