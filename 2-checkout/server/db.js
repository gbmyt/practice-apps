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
    // Expand this table definition as needed
    db.queryAsync(
      `CREATE TABLE IF NOT EXISTS responses (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(255) NOT NULL,
        password VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        addrOne VARCHAR(255) NOT NULL,
        addrTwo VARCHAR(255) NOT NULL,
        city VARCHAR(255) NOT NULL,
        state VARCHAR(255) NOT NULL,
        zip VARCHAR(5) NOT NULL,
        phone VARCHAR(10),
        cc VARCHAR(255) NOT NULL,
        expiry VARCHAR(5) NOT NULL,
        cvv INT NOT NULL,
        billingZip VARCHAR(6) NOT NULL,
        session VARCHAR(255) NOT NULL
      )`
    )
  )
  .catch((err) => {
    if (err.code === 'ER_BAD_DB_ERROR' && err.errno === 1049) {
      console.log('Database Doesn\'t Exist ', err);
    } else {
      console.log('Error Connecting to db', err);
    }
  });

// FRAGILE: No validation before attempting to save, fails silently
let dbSave = response => {
  connection.connect();
  console.log('inside db save func');

  const getUsersQuery = `SELECT * FROM users;`;
  const saveResponseQuery = `INSERT INTO
    responses(username, password, email, addrOne, addrTwo, city, state, zip, phone, cc, expiry, cvv, billingZip, session)
    VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

  connection.query(saveResponseQuery, Object.values(response), (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Saved to database!');
    }
  });
};

module.exports.db = db;
module.exports.dbSave = dbSave;
