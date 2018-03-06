var mysql = require("mysql");

const mysql_pwd = process.env.MYSQL_PASSWORD;

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: mysql_pwd,
  database: "burgers_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
