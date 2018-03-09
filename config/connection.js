// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// DEPENDENCIES
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var mysql = require("mysql");

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// use password variable set up in server.js using dotenv
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const mysql_pwd = process.env.MYSQL_PASSWORD;

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// setup My SQL connection
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
if (process.env.JAWSDB_URL){
  // for Heroku 
  connection = mysql.createConnection(process.env.JAWSDB_URL)

}else {
  var connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: mysql_pwd,
    database: "burgers_db"
  });
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// connect
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
connection.connect(function(err) {
  if (err) {
    console.error("MySQL DB: error connecting: " + err.stack);
    return;
  }
  console.log("MySQL DB: connected as id " + connection.threadId);
});

module.exports = connection;
