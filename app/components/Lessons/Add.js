var React = require('react');
var Parse = require('parse').Parse;
var ParseReact = require('parse-react');

var AddLesson = React.createClass({

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

  addLesson: function() {
    var title = React.findDOMNode(this.refs.title);
    var description = React.findDOMNode(this.refs.description);
    var slides = React.findDOMNode(this.refs.slides);
    var lessonDate = React.findDOMNode(this.refs.lessonDate);
    var image = React.findDOMNode(this.refs.image);
    var number = React.findDOMNode(this.refs.number);

    if (title.value.length && description.value.length && slides.value.length && image.value.length && number.value.length) {
      ParseReact.Mutation.Create('Lesson', {
        title: title.value,
        description: description.value,
        slides: '/' + slides.value,
        date: lessonDate.value,
        image: image.value,
        number: number.value
      }).dispatch();

      title.value = '';
      description.value = '';
      slides.value = '';
      lessonDate.value = '';
      image.value = '';
      number.value = '';
    }
  },

  renderAddLesson: function() {
    return (
      <ul>
        <li className="lesson-item clearfix section-break">
          <div className="lesson-info">
            <h2>Add Lesson</h2>
            <form>
              <input
                type="text"
                ref="title"
                placeholder="Title" /><br />
              <input
                type="text"
                ref="number"
                placeholder="Lesson number (i.e., 01)" /><br />
              <textarea
                ref="description"
                placeholder="description"></textarea><br />
              <input
                type="text"
                ref="slides"
                placeholder="Slides" /><br />
              <input
                type="text"
                ref="lessonDate"
                placeholder="Date (i.e., 8.4.15)" /><br />
              <input
                type="text"
                ref="image"
                placeholder="Image URL" /><br />
              <button
                type="submit"
                onClick={this.addLesson}>
                  Submit
              </button>
            </form>
          </div>
        </li>
      </ul>
    );
  },

  render: function() {
    return (
      <div>
      {this.state.isAdmin ? this.renderAddLesson() : ''}
      </div>
    );
  }
});

module.exports = AddLesson;
