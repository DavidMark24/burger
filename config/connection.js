const mysql = require('mysql');
const env = require('dotenv').config();

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  // NOTE: Be sure to add your MySQL password here!
  password: process.env.db_password,
  database: 'burgers_db',
});

// connection.connect((err) => {
//   if (err) {
//     console.error(`error connecting: ${err.stack}`);
//     return;
//   }
//   console.log(`connected as id ${connection.threadId}`);
// });

module.exports = connection;
