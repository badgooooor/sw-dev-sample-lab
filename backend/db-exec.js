const bcrypt = require('bcrypt');

module.exports.createTable = `
  CREATE TABLE IF NOT EXISTS users (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, 
    fullname VARCHAR(20),
    username VARCHAR(30),
    password CHAR(32), 
    signup_date TIMESTAMP NOT NULL DEFAULT NOW()
  );
`;