var _01 = require('./lessons/_01');
//var _02 = require('./lessons/_02');

var _lessons = [];
//_lessons.push(_02);
_lessons.push(_01);

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
