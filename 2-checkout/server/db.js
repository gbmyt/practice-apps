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
// 1.   Figure out if theres a better way to create
//     checkout db (package.json script currently)
//
// 2. Refactor `CREATE TABLE` statement to accept only
//      correct data types (INT for CC, CVV, etc.)
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
        addrTwo VARCHAR(255),
        city VARCHAR(255) NOT NULL,
        state VARCHAR(255) NOT NULL,
        zip VARCHAR(5) NOT NULL,
        phone VARCHAR(10),
        cc VARCHAR(255) NOT NULL,
        expiry VARCHAR(255) NOT NULL,
        cvv VARCHAR(4) NOT NULL,
        billingZip VARCHAR(6) NOT NULL,
        session VARCHAR(255) NOT NULL,
        UNIQUE(id),
        UNIQUE(session)
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

let dbSave = (response, cb) => {
  connection.connect();

  const saveResponseQuery = `INSERT INTO
    responses(username, password, email, session, addrOne, addrTwo, city, state, zip, phone, cc, expiry, cvv, billingZip)
    VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

  connection.query(saveResponseQuery, Object.values(response), (err) => {
    if (err) {
      cb(err);
    } else {
      cb(null);
    }
  });
};

module.exports.db = db;
module.exports.dbSave = dbSave;
