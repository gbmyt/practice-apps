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
//   Refactor `CREATE TABLE` statement to accept only
//      correct data types (INT for CC, CVV, etc.)
// ======================================================
db.connectAsync()
  .then(() => console.log(`Connected to MySQL as id: ${db.threadId}`))
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
