const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./db/stocky.db', sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the stocky database.');
});

module.exports = db;
