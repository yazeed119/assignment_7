require("dotenv").config();
const mysql = require("mysql2");
//console.log(process.env)
const pool = mysql.createPool({


  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
});


module.exports = pool.promise();



