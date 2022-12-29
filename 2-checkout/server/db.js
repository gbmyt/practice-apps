const mysql = require("mysql2");
const Promise = require("bluebird");

// Configure process.env variables in ../.env
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

const db = Promise.promisifyAll(connection, { multiArgs: true });

// ======================================================
//                      TO-DOs:
//    Figure out if theres a better way to create
//     checkout db (package.json script currently)
// ======================================================

db.connectAsync()
  .then(() => console.log(`Connected to MySQL as id: ${db.threadId}`))
  .then(() =>
    // Expand this table definition as needed:
    db.queryAsync(
      "CREATE TABLE IF NOT EXISTS responses (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY)"
    )
  )
  .then(() =>
    // Hash/Hide Password
    db.queryAsync(
      `CREATE TABLE IF NOT EXISTS users (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        Username VARCHAR(100) NOT NULL,
        Password VARCHAR(100) NOT NULL,
        Email VARCHAR(100)
      )`
    )
  )
  .catch((err) => console.log(err));

let dbSave = user => {
  connection.connect();
  console.log('inside db save func');

  const getUsersQuery = `SELECT * FROM users;`;
  const setUserQuery = `INSERT INTO
    users(Username, Password, Email)
    VALUES(?, ?, ?)
    `;

  connection.query(setUserQuery, [user.username, user.password, user.email], (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Saved to database!');
    }
  });
};

module.exports.db = db;
module.exports.dbSave = dbSave;
