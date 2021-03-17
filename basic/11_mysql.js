const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Yu123456.',
  database: 'mysql'
});

connection.connect();

connection.query('SELECT * FROM yzh_user where name="deng1"', function(error, results, fields) {
  if (error) throw error;
  console.log(fields);
});

connection.end();