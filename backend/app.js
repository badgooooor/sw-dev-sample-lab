const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.get('/', (req, res) => {
  res.send("Hello world!");
});

app.listen(5000, (req, res) => {
  console.log("Listening on port 3000");
});