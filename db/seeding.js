const pool = require("../config.js");
const fs = require("fs");

const seedQuery = fs.readFileSync("db/seeding.sql", "utf-8");
pool.query(seedQuery, (err, res) => {
    if (err) throw err.message;
    else {
        console.log("SEEDING BERHASIL");
    }
    pool.end();
});
console.log(seedQuery);
