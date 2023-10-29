const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  password: "0788386721",
  host: "localhost",
  port: 5432,
  database: "Tourism",
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
