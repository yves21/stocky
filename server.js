const express        = require('express');
const bodyParser     = require('body-parser');
const app            = express();
const sqliteJSON      = require('sqlite-json');

const port = 8000;
const db = require('./app/config/sqlite');
const exporter = sqliteJSON(db);

app.use(bodyParser.urlencoded({ extended: true }));

require('./app/routes')(app, exporter);

app.listen(port, () => {
  console.log('We are live on ' + port);
});
