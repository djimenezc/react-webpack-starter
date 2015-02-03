// source -- https://github.com/webpack/react-starter

"use strict";

var update = require("react/lib/update");

function DB(initialData) {
  this.data = initialData || {};
}

module.exports = DB;

DB.prototype.get = function(id, createDefaultData) {
  var d = this.data["_" + id];
  if(!d) {
    return this.data["_" + id] = createDefaultData;
  }
  return d;
};

DB.prototype.getAll = function() {
  return this.data;
};

DB.prototype.update = function(id, upd) {
  return this.data["_" + id] = update(this.data["_" + id], upd);
};

DB.prototype.set = function(id, data) {
  return this.data["_" + id] = data;
};

DB.prototype.setArray = function(data) {
  return this.data["_data"] = data;
};
