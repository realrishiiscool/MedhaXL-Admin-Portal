const mysql = require('mysql2');
require('dotenv').config();


const db = mysql.createPool({

    connectionLimit: 10,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,


});

module.exports = db;