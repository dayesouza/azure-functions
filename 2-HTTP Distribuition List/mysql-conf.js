const mysql = require('mysql2');

var config =
{
    host: 'day-distribuition-list.mysql.database.azure.com',
    user: 'azure@day-distribuition-list',
    password: process.env.DATABASE_PASSWORD,
    database: 'distribuition-list',
    port: 3306
};

const conn = mysql.createConnection(config);

module.exports = conn;