var React = require('react');
var Parse = require('parse').Parse;
var ParseReact = require('parse-react');
var parseUtils = require('../utils/parseUtils');

var Profile = React.createClass({
  mixins: [ParseReact.Mixin],

  observe: function() {
    return {
      user: ParseReact.currentUser
    }
  },

  handleChange: function(name, e) {
    var change = {};
    change[name] = e.target.value;
    this.setState(change);
  },

  handleSubmit: function(e) {
    e.preventDefault();
    var data = {
      email: this.state.email,
      linkedin: this.state.linkedin,
      twitter: this.state.twitter,
      facebook: this.state.facebook,
      description: this.state.description,
      guiltyPleasure: this.state.guiltyPleasure
    };
    parseUtils.updateUser(this.state.user, data);
  },

  getInitialState: function() {
    var user = Parse.User.current();
    return {
      email: user.attributes.email,
      linkedin: user.attributes.linkedin,
      twitter: user.attributes.twitter,
      facebook: user.attributes.facebook,
      description: user.attributes.description,
      guiltyPleasure: user.attributes.guiltyPleasure,
      user: user
    }
  },

  render: function() {
    return (
      <div>
        <div className="header-section">
          <h1>Profile</h1>
          <p className="lg">Below is your profile information. Update it to share your most current information with your peers.</p>
        </div>
        <div className="section-break clearfix">
          <h2>Edit Info</h2>
          <form>
            <h4>GitHub Username</h4>
            <h5>{this.data.user.username}</h5>
            <h4>Email</h4>
            <input
              type="text"
              value={this.state.email}
              onChange={this.handleChange.bind(this, 'email')} />
            <h4>LinkedIn</h4>
            <p>Add the link to your LinkedIn profile.</p>
            <input
              type="text"
              value={this.state.linkedin}
              onChange={this.handleChange.bind(this, 'linkedin')} />
            <h4>Twitter</h4>
            <p>Add the link to your Twitter profile.</p>
            <input
              type="text"
              value={this.state.twitter}
              onChange={this.handleChange.bind(this, 'twitter')} />
            <h4>Facebook</h4>
            <p>Add the link to your Facebook profile.</p>
            <input
              type="text"
              value={this.state.facebook}
              onChange={this.handleChange.bind(this, 'facebook')} />
            <h4>Description</h4>
            <p>Add a 140 character description about yourself.</p>
            <input
              type="text"
              value={this.state.description}
              onChange={this.handleChange.bind(this, 'description')} />
            <h4>Guilty Pleasure</h4>
            <p>Tell us your guilty pleasure.</p>
            <input
              type="text"
              value={this.state.guiltyPleasure}
              onChange={this.handleChange.bind(this, 'guiltyPleasure')} />
          </form>
          <a href="#" className="button mb" onClick={this.handleSubmit}>Update Info</a>
        </div>
        <div className="section-break clearfix">
          <h2>Update Picture</h2>
          <p>First, update your profile picture on GitHub by following these <a href="https://help.github.com/articles/how-do-i-set-up-my-profile-picture/" target="_blank">instructions</a>. After that, click the button bellow.</p>
          <a href="#" className="button mb">Update Picture</a>
        </div>
      </div>
    );
  }
});

module.exports = Profile;
