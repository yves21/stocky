const db = require('../config/sqlite');
module.exports = function(app, db) {
  app.get('/stock', (req, res) => {
    db.serialize(() => {
      db.each(`SELECT * from stock`, (err, row) => {
        if (err) {
          console.error(err.message);
        }
        console.log(row.id + "\t" + row.name);
      });
    });
    res.send('Hello')
  });
};
