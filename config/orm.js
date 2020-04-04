// Import MySQL connection promise.
var pool = require("./connections");

module.exports = {
  selectAll: async(tableInput) => 
    (await (await pool).execute(`SELECT * FROM ${tableInput}`))[0],
  insertOne: async(table, data) => 
    await (await pool).query(`INSERT INTO ${table} SET ?`, data),
  updateOne: async(table, data, condition) => 
    await (await pool).query(`UPDATE ${table} SET ? WHERE ?`, [data, condition])
};