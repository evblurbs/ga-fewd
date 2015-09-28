// include lessons here
// for example:
// var _01 = require('./lessons/_01');

var _lessons = [];
// push lessons to _lessons array
// for example:
// _lessons.push(_01);
// lessons are listed in ascending order
// of the array's index

var _lookup = {};
for (var i = 0, len = _lessons.length; i < len; i++) {
    _lookup[_lessons[i].number] = _lessons[i];
}

var lessonStore = {
  getLesson: function(number) {
    return _lookup[number];
  },

  getLessons: function() {
    return _lessons;
  }
};

module.exports = lessonStore;
