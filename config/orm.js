// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// import the MySQL connection
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var connection = require("./connection.js");

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Helper function for SQL syntax.
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function printQuestionMarks(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push("?");
  }
  return arr.toString();
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Helper function to convert object key/value pairs to SQL syntax
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function objToSql(ob) {
  var arr = [];
  for (var key in ob) {
    var value = ob[key];
    if (Object.hasOwnProperty.call(ob, key)) {
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      arr.push(key + "=" + ob[key]);
    }
  }
  return arr.toString();
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Object-Relation Mapping 
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var orm = {
  ////////////////
  // SELECT All //
  ////////////////
  selectAll: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    // console.log("selectAll queryString: " + queryString);
    connection.query(queryString, function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },

  ////////////////
  // INSERT ONE //
  ////////////////
  insertOne: function(tableInput, cols, vals, cb) {
    var queryString = "INSERT INTO " + tableInput;
    queryString += " (";
    queryString += cols.toString();
    queryString += ") VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";
    console.log("insertOne queryString: " + queryString);
    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }
      console.log("InsertOne result: " + result);
      cb(result);
    });
  },

  ////////////////
  // UPDATE ONE //
  ////////////////
  updateOne: function(tableInput, objColVals, condition, cb) {
    var queryString = "UPDATE " + tableInput;
    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;
    // console.log("unpdateOne queryString: " + queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      console.log("updateOne result: " + result);
      cb(result);
    });
  }
};

module.exports = orm;
