var React = require('react');
var Parse = require('parse').Parse;
var ParseReact = require('parse-react');
var cookieUtils = require('../utils/cookieUtils');
var parseUtils = require('../utils/parseUtils');

var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

var Nav = require('./Nav');
var Footer = require('./Footer');

require('../../stylesheets/all.scss');

var Main = React.createClass({
  mixins: [ParseReact.Mixin],

  observe: function() {
    return {
      user: ParseReact.currentUser
    };
  },

  componentDidMount: function() {
    sessionToken = cookieUtils.getItem("session-token");
    if(!this.data.user && sessionToken){
      parseUtils.clientLogin(sessionToken);
    }
  },

  renderHomePage: function() {
    return (
      <div className="home">
        <div className="header-section">
          <h2>FRONT-END WEB DEVELOPMENT<br />GENERAL ASSEMBLY<br />DECEMBER 7TH - FEBRUARY 29TH</h2>
          <a href="/login" className="button">Sign Up</a>
        </div>
        <div className="section-break">
          <h1>Welcome to the FEWD course!</h1>
          <p>In the course, you will learn HTML, CSS, and JavaScript - the three languages used to create all websites. By the end, you will have a portfolio of projects - including your final project. The final project will be a fully responsive website, with mulitple pages, and various interactive elements.</p>
        </div>
      </div>
    );
  },

  render: function() {
    if(this.data.user) {
      return (
        <div className="page-wrap">
          <div className="content">
            <Nav user={this.data.user} />
            <RouteHandler />
          </div>
          <Footer />
        </div>
      );
    } else {
      return (
        <div className="page-wrap">
          <div className="content">
            <Nav user={false} />
            {this.renderHomePage()}
          </div>
          <Footer />
        </div>
      );
    }
  }
});

module.exports = Main;

