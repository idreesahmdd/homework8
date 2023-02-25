const { Pool } = require("pg");
const pool = new Pool({
    host: "localhost",
    user: "postgres",
    password: "postgres",
    database: "dvdrental",
    port: 5432,
});

// console.log(pool);
module.exports = pool;
