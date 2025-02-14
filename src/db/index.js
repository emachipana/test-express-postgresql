const Pool = require("pg").Pool;
const DB_CREDENTIALS = require("../constants.js");

const pool = new Pool({
  user: DB_CREDENTIALS.user,
  host: DB_CREDENTIALS.host,
  database: DB_CREDENTIALS.dbname,
  password: DB_CREDENTIALS.password,
  ssl: true
});

pool.connect().then(() => {
    console.log("Database is connected");
}).catch((error) => {
    console.error(`Error al conectar: ${error}`)
});

module.exports = pool;
