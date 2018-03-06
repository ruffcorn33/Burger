var connection = require("./connection.js");


// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
  var arr = [];
  for (var key in ob) {
    var value = ob[key];
    if (Object.hasOwnProperty.call(ob, key)) {
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      arr.push(key + "=" + value);
    }
  }
  return arr.toString();
}

var orm = {

  // SELECT All
  selectAll: function(tableInput, cb) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, tableInput, function(err, result) {
      if (err) throw err;
      console.log(result);
      cb(result);
    });
  },

  // INSERT ONE
  selectAll: function(tableInput, keyName, cb) {
    var queryString = "INSERT INTO " + tableInput + " SET " + objToSql(keyName);
    connection.query(queryString, function(err, result) {
      if (err) throw err;
      console.log(result);
      cb(result);
    });
  },

  // UPDATE ONE
  updateOne: function(tableInput, objColVals, cb) {
    var queryString = "UPDATE " + tableInput;
    queryString += " SET ";
    queryString += objToSql(objColVals);
    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }

};

module.exports = orm;
