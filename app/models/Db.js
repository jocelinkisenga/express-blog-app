const Mysql = require('mysql');
const dbConfig = require('../../config/ConfigDb.js');
// Create a connection to the database
const connection = Mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DATABASE_NAME
});

connection.connect(error=>{
	if (error) throw error;
	console.log('connected successfully');
});

module.exports = connection;
