// source -- https://github.com/webpack/react-starter

"use strict";

module.exports = function(fn, timeout, callback) {
  var timedOut = false;
  var to = setTimeout(function() {
    timedOut = true;
    callback();
  }, timeout);
  fn(function() {
    clearTimeout(to);
    if(!timedOut) { callback(); }
  });
};
