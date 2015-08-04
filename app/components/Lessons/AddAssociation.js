var React = require('react');
var Parse = require('parse').Parse;
var ParseReact = require('parse-react');

var AddAssociation = React.createClass({
  getInitialState: function() {
    return {
      isAdmin: false
    }
  },

  componentDidMount: function() {
    var query = (new Parse.Query(Parse.Role));
    query.equalTo("name", "Administrator");
    query.equalTo("users", Parse.User.current());
    query.first().then(function(adminRole) {
      if (adminRole) {
        this.setState({
          isAdmin: true
        });
      } else {
        this.setState({
          isAdmin: false
        });
      }
    }.bind(this));
  },

  addAssocation: function(e) {
    e.preventDefault();
    var title = React.findDOMNode(this.refs.title);
    var description = React.findDOMNode(this.refs.description);
    var link = React.findDOMNode(this.refs.link);
    var linkText = React.findDOMNode(this.refs.linkText);

    if (title.value.length && description.value.length && link.value.length && linkText.value.length) {
      ParseReact.Mutation.Create(this.props.assocation, {
        title: title.value,
        description: description.value,
        link: link.value,
        linkText: linkText.value,
        lesson: this.props.lesson
      }).dispatch();

      title.value = '';
      description.value = '';
      link.value = '';
      linkText.value = '';
    }
  },

  renderAddAssociation: function() {
    return (
      <div className="clearfix">
        <h3>Add Association</h3>
        <form>
          <input
            type="text"
            ref="title"
            placeholder="Title" /><br />
          <input
            type="text"
            ref="link"
            placeholder="Link URL" /><br />
          <input
            type="text"
            ref="linkText"
            placeholder="Link Text" /><br />
          <textarea
            ref="description"
            placeholder="description"></textarea><br />
          <a href="#" onClick={this.addAssocation}>Submit</a>
        </form>
      </div>
    );
  },

  render: function() {
    return(
      <div>
        {this.state.isAdmin ? this.renderAddAssociation() : ''}
      </div>
    );
  }
});

module.exports = AddAssociation;
