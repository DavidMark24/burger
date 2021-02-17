const connection = require("./connection.js");

// Connect to MySQL

connection.connect((err) => {
  if (err) {
    console.error(`error connecting: ${err.stack}`);
    return;
  }
  console.log(`connected as id ${connection.threadId}`);
});

// ORM Methods

const orm = {
    
  // Select All

  selectAll: function (callback) {
    connection.query("SELECT * FROM burgers", function (err, result) {
      if (err) throw err;
      callback(result);
    });
  },

  //   Insert One

  insertOne: function (burger_name, callback) {
    connection.query(
      "INSERT INTO burgers SET ?",
      {
        burger_name: burger_name,
        devoured: false,
      },
      function (err, result) {
        if (err) throw err;
        callback(result);
      }
    );
  },

  // Update One

  updateOne: function (burgerId, callback) {
    connection.query(
      "UPDATE burgers SET ? WHERE ?",
      [{ devoured: true }, { id: burgerId }],
      function (err, result) {
        if (err) throw err;
        callback(result);
      }
    );
  },
};

module.exports = orm
