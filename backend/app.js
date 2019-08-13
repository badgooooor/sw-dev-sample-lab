const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');
const crypto = require('crypto');
const dbExec = require('./db-exec'); 

const app = express();
app.use(cors());
app.use(bodyParser({ extended: true }));

const db = mysql.createConnection({
  host: 'localhost',
  database: 'swDevLab',
  user: 'root',
  password: 'admin1234',
  multipleStatements: true
});

db.connect((err) => {
  if (!err) {
    console.log("Connected to database!");
    db.execute(dbExec.createTable, (err, res, fields) => {
      if (err) console.log(err.message);
    });
  } else {
    console.log("Error connecting database");
  }
});

app.get('/', (req, res) => {
  res.send("Hello world!");
});

app.post('/login', (req, res) => {
  res.send(req.body);
});

app.post('/register', (req, res) => {
  let hash = crypto.createHash('md5').update(req.body.password).digest("hex");
  db.query(
    'INSERT INTO users (fullname, username, password) VALUES (?,?,?)',
    [req.body.fullname, req.body.username, hash],
    (err, results) => {
      if (err) res.send({ error: err });
      res.send({ "message": "Registered successful!" });
    }
  );
});

app.listen(5000, (req, res) => {
  console.log("🚀 Listening on port 5000");
});