const orm = require("../config/orm.js");

const burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },

  insertOne: function(cols, vals, cb) {
    orm.insertOne("burgers", cols, vals, function(res) {
      cb(res);
    });
  },

  updateOne: function(objCol, condition, cb) {
    orm.updateOne("burgers", objCol, condition, function(res) {
      cb(res);
    });
  }
};

module.exports = burger;