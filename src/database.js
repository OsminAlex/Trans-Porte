//Database
const { createPool } = require("mysql2/promise");

const DB_HOST = "localhost";
const DB_PORT = 3306;
const DB_USER = "root";
const DB_PASSWORD = "Educa2023*";
const DB_DATABASE = "TransPorte";

const pool = createPool({
  host: DB_HOST,
  port: DB_PORT,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_DATABASE,
});
module.exports = {
  pool,
};
