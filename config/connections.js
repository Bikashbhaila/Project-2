const mysql = require('mysql2/promise');

module.exports = (async() => {
  const pool = await mysql.createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Hshriver18!',
    database: 'maps_db',
    connectionLimit: 5
  });
  console.log("Connection pool created!");
  return pool;
})();