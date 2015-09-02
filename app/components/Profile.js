var React = require('react');
var Parse = require('parse').Parse;
var parseUtils = require('../utils/parseUtils');

var validateEmail = function(email) {
  var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
  return re.test(email);
}

var notURL = function(url) {
  if(url.indexOf("linkedin.com") > -1 || url.indexOf("twitter.com") > -1) {
    return false;
  } else {
    return true;
  }
}

var Profile = React.createClass({

  handleChange: function(name, e) {
    var change = {};
    change[name] = e.target.value;
    this.setState(change);
  },

  handleSubmit: function(e) {
    e.preventDefault();
    if(validateEmail(this.state.email) && notURL(this.state.linkedin) && notURL(this.state.twitter)) {
      var data = {
        name: this.state.name,
        email: this.state.email,
        linkedin: this.state.linkedin,
        twitter: this.state.twitter,
        guiltyPleasure: this.state.guiltyPleasure
      };
      parseUtils.updateUser(this.state.user, data);
      this.setState({
        success: true,
        error: false
      });
    } else {
      this.setState({
        error: true,
        success: false
      });
    }

    window.setTimeout(function() {
      this.setState({
        success: false
      });
    }.bind(this), 1000);
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
      user: user,
      success: false,
      error: false
    }
  },

  renderUserFeedback: function() {
    if (this.state.success) {
      return (
        <span className="message success">Updated</span>
      );
    } else if (this.state.error) {
      return (
        <span className="message error">Invalid email, LinkedIn, and/or Twitter</span>
      );
    }
  },

  render: function() {
    return (
      <div>
        <div className="header-section">
          <h1>Profile</h1>
          <p className="lg">Below is your profile information. Update it to share your current information with your peers.</p>
        </div>
        <div className="section-break clearfix">
          <h2>Edit Info</h2>
          <form>
            <div className="fieldset clearfix">
              <label>Name</label>
              <input
                type="text"
                value={this.state.name}
                onChange={this.handleChange.bind(this, 'name')} />
            </div>
            <div className="fieldset clearfix">
              <label>Email</label>
              <input
                type="text"
                value={this.state.email}
                onChange={this.handleChange.bind(this, 'email')} />
            </div>
            <div className="fieldset clearfix">
              <label>GitHub</label>
              <input
                type="text"
                value={this.state.username}
                disabled={true} />
            </div>
            <div className="fieldset clearfix">
              <label>LinkedIn</label>
              <input
                type="text"
                value={this.state.linkedin}
                onChange={this.handleChange.bind(this, 'linkedin')} />
              <span>Add your LinkedIn username (i.e. evblurbs).</span>
            </div>
            <div className="fieldset clearfix">
              <label>Twitter</label>
              <input
                type="text"
                value={this.state.twitter}
                onChange={this.handleChange.bind(this, 'twittter')} />
              <span>Add your Twitter username. Don't include the @ symbol.</span>
            </div>
            <div className="fieldset clearfix">
              <label>Guilty Pleasure</label>
              <input
                type="text"
                value={this.state.guiltyPleasure}
                onChange={this.handleChange.bind(this, 'guiltyPleasure')} />
            </div>
            <a href="#" className="button mb" onClick={this.handleSubmit}>Update Info</a>
            {this.renderUserFeedback()}
          </form>
        </div>
        <div className="section-break clearfix">
          <h2>Update Picture</h2>
          <p>To update your profile picture on GitHub, follow these <a href="https://help.github.com/articles/how-do-i-set-up-my-profile-picture/" target="_blank">instructions</a>. Your photo will update automatically on this website, but It may take a couple of hours.</p>
        </div>
      </div>
    );
  }
});

module.exports = Profile;
