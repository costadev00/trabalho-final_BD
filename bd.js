// get the client
const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
    database: 'loja',
   password: '<sua_senha>'
});


module.exports = connection;