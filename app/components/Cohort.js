var React = require('react');
var Parse = require('parse').Parse;
var ParseReact = require('parse-react');

var Cohort = React.createClass({
  mixins: [ParseReact.Mixin],

  observe: function() {
    return {
      cohort: (new Parse.Query('User')).ascending('name')
    }
  },

  renderLinks: function() {
    if(this.data.cohort.length) {
      var userLinks = this.data.cohort.map(function(user, index) {
        return (
          <li key={user.objectId} className="cohortUsers-item">
            <a onClick={this.scrollToUser.bind(this, user.id.objectId)}>{user.name ? user.name : 'Undefined'}</a>
          </li>
        );
      }.bind(this));
      return (
        <ul className="cohortUsers-list">{userLinks}</ul>
      );
    }
  },

  scrollToUser: function(i) {
    var el = document.getElementById(i);
    el.scrollIntoView();
  },

  renderEmail: function(user) {
    if(user.email) {
      return (
        <li key="email" className="cohortInfo-item">
          <span className="cohortInfo-item-label">Email</span>
          <span className="cohortInfo-item-value"><a href={"mailto:" + user.email}>{user.email}</a></span>
        </li>
      );
    }
  },

  renderGitHub: function(user) {
    if(user.username) {
      return (
        <li key="github" className="cohortInfo-item">
          <span className="cohortInfo-item-label">GitHub</span>
          <span className="cohortInfo-item-value"><a href={"https://github.com/" + user.username} target="_blank">{user.username}</a></span>
        </li>
      );
    }
  },

  renderTwitter: function(user) {
    if(user.twitter) {
      return (
        <li key="twitter" className="cohortInfo-item">
          <span className="cohortInfo-item-label">Twitter</span>
          <span className="cohortInfo-item-value"><a href={"https://twitter.com/" + user.twitter} target="_blank">@{user.twitter}</a></span>
        </li>
      );
    }
  },

  renderLinkedIn: function(user) {
    if(user.linkedin) {
      return (
        <li key="linkedin" className="cohortInfo-item">
          <span className="cohortInfo-item-label">LinkedIn</span>
          <span className="cohortInfo-item-value"><a href={"https://www.linkedin.com/in/" + user.linkedin} target="_blank">{user.linkedin}</a></span>
        </li>
      );
    }
  },

  renderGuiltyPleasure: function(user) {
    if(user.guiltyPleasure) {
      return (
        <li key="guiltyPleasure" className="cohortInfo-item">
          <span className="cohortInfo-item-label">Guilty Pleasure</span>
          <span className="cohortInfo-item-value">{user.guiltyPleasure}</span>
        </li>
      );
    }
  },

  renderProfiles: function() {
    if(this.data.cohort.length) {
      var cohort = this.data.cohort.map(function(user, index) {
        return (
          <li key={user.id.objectId} className="section-break cohort-item clearfix" id={user.id.objectId}>
            <img
              src={user.avatar_url}
              className="cohort-picture" />
            <div className="cohortInfo">
              <h2 className="cohortInfo-name">{user.name ? user.name : 'Undefined'}</h2>
              <ul className="cohortInfo-list">
                {this.renderEmail(user)}
                {this.renderGitHub(user)}
                {this.renderTwitter(user)}
                {this.renderLinkedIn(user)}
                {this.renderGuiltyPleasure(user)}
              </ul>
            </div>
          </li>
        );
      }.bind(this));
      return (
        <ul className="cohort-list">{cohort}</ul>
      );
    }
  },

  render: function() {
    return (
      <div>
        <div className="header-section">
          <h1>Cohort</h1>
          <p className="lg">Below is your cohort! This includes your peers, staff involved with GA, instructors, and guest developers.</p>
          {this.renderLinks()}
        </div>
        {this.renderProfiles()}
      </div>
    );
  }
});

module.exports = Cohort;
