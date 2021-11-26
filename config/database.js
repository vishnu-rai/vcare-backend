const mysql = require("mysql");

var mysqlConnection = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.MYSQL_DB,
  multipleStatements: true,
});

module.exports = mysqlConnection;
