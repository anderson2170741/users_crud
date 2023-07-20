const { Sequelize } = require('sequelize');
require('dotenv').config();

const db = new Sequelize({
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    dialect: "postgres",
});

/*const db2 = new Sequelize({
    host: "localhost",
    database: "users_db",
    port: 5432,
    username: "postgres",
    password: "0741",
    dialect: "postgres",
});*/

// export default db;
module.exports = {
    db
};
