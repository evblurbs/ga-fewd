var React = require('react');
var Parse = require('parse').Parse;
var parseUtils = require('../utils/parseUtils');
var githubUtils = require('../utils/githubUtils');

var Profile = React.createClass({
  
  handleChange: function(name, e) {
    var change = {};
    change[name] = e.target.value;
    this.setState(change);
  },

  handleSubmit: function(e) {
    e.preventDefault();
    var data = {
      name: this.state.name,
      email: this.state.email,
      linkedin: this.state.linkedin,
      twitter: this.state.twitter,
      guiltyPleasure: this.state.guiltyPleasure
    };
    parseUtils.updateUser(this.state.user, data);
  },

  getInitialState: function() {
    var user = Parse.User.current();
    return {
      username: user.attributes.username,
      name: user.attributes.name,
      email: user.attributes.email,
      linkedin: user.attributes.linkedin,
      twitter: user.attributes.twitter,
      guiltyPleasure: user.attributes.guiltyPleasure,
      user: user
    }
  },

  updatePicture: function() {
    githubUtils.updateAvatar(this.state.user, this.state.user.attributes.access_token, parseUtils.updateUser);
    console.log('update photo!');
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
            <h5>{this.state.username}</h5>
            <h4>Name</h4>
            <input
              type="text"
              value={this.state.name}
              onChange={this.handleChange.bind(this, 'name')} />
            <h4>Email</h4>
            <input
              type="text"
              value={this.state.email}
              onChange={this.handleChange.bind(this, 'email')} />
            <h4>LinkedIn</h4>
            <p>Add your LinkedIn username (i.e. evblurbs).</p>
            <input
              type="text"
              value={this.state.linkedin}
              onChange={this.handleChange.bind(this, 'linkedin')} />
            <h4>Twitter</h4>
            <p>Add your Twitter username. Don't include the @ symbol.</p>
            <input
              type="text"
              value={this.state.twitter}
              onChange={this.handleChange.bind(this, 'twitter')} />
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
          <p>To update your profile picture on GitHub, follow these <a href="https://help.github.com/articles/how-do-i-set-up-my-profile-picture/" target="_blank">instructions</a>. That should update your photo automatically, but it may take a few minutes to refresh on the site. If that doesn't work, you can fetch your GitHub avatar again by clicking the button below.</p>
          <a className="button mb" onClick={this.updatePicture}>Fetch GitHub Avatar</a>
        </div>
      </div>
    );
  }
});

module.exports = Profile;
