const connection = require("./connection.js");

const orm = {
  selectAll: function(table, cb) {
    let queryString = "SELECT * FROM " + table + ";";
    connection.query(queryString, function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },

  insertOne: function(table, col, vals, cb) {
    let queryString = `INSERT INTO ${table} (${col.toString()}) VALUES (${vals})`;
    connection.query(queryString, function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  
  updateOne: function(table, objCol, condition, cb) {
    let queryString = `UPDATE ${table} SET ${objCol} WHERE ${condition}`;
    connection.query(queryString, function(err, result) {
      if (err) throw err;
      cb(result);
    });
  }
};

module.exports = orm;