const mysql = require("mysql");

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PSWORD,
});

db.connect();

module.exports = db;