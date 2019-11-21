const mysql = require('mysql');
require('dotenv').config();
const connectionPool = mysql.createPool({
  connectionLimit:10,
  host     :"localhost",
  user     : "root",
  password : "",
  database : "music",
  multipleStatements: true
});

exports.cp = connectionPool;
