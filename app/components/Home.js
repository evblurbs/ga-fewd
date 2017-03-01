var React = require('react');

var Home = React.createClass({
  render: function(){
    return(
      <div className="home">
        <div className="header-section">
          <h2>FRONT-END WEB DEVELOPMENT<br />GENERAL ASSEMBLY<br />FEBRUARY 21st - APRIL 27TH</h2>
        </div>
        <div className="section-break">
          <h1>Welcome to the FEWD course!</h1>
          <p>In the course, you will learn HTML, CSS, and JavaScript - the three languages used to create all websites. By the end, you will have a portfolio of projects - including your final project. The final project will be a fully responsive website, with mulitple pages, and various interactive elements.</p>
        </div>
      </div>
    )
  }
})

module.exports = Home;
