module.exports = (app, exporter) => {
  app.get('/articles', (req, res) => {
    /*db.serialize(() => {
      db.each(`SELECT * from articles`, (err, row) => {
        if (err) {
          console.error(err.message);
        }
        console.log(row.barcode + "\t");
      });
    });*/
    exporter.json("select * from articles", (err, json) => {
      res.send(json);
    });
  });
};
