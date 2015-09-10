var _01 = require('./lessons/_01');
var _02 = require('./lessons/_02');
var _03 = require('./lessons/_03');
var _04 = require('./lessons/_04');
var _05 = require('./lessons/_05');
var _06 = require('./lessons/_06');
var _07 = require('./lessons/_07');
var _08 = require('./lessons/_08');
var _09 = require('./lessons/_09');
var _10 = require('./lessons/_10');
var _11 = require('./lessons/_11');
var _12 = require('./lessons/_12');

var _lessons = [];
_lessons.push(_12);
_lessons.push(_11);
_lessons.push(_10);
_lessons.push(_09);
_lessons.push(_08);
_lessons.push(_07);
_lessons.push(_06);
_lessons.push(_05);
_lessons.push(_04);
_lessons.push(_03);
_lessons.push(_02);
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
