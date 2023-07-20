# Sequelize

Instalación de sequelize

---

npm i sequelize ph pg-hstore
---

## Conexión a una base de datos

1. Para conectar a una base de datos debemos crear una instancia de Sequelize

Crear una nueva carpeta llamada (utils, config, database)
-- Crear un archivo llamado database.js

-----
const { Sequelize } = require("sequelize");

y luego creamos y configuramos la conexión 

-----
const { Sequelizze } = require("sequelize");

const db new Sequelize({
    host: "localhost",
    database: "cars_db",
    port: 5432,
    username: "postgres",
    password: "root",
    dialect: "postgre",
});
-------

Y por último exportamos la instancia
const { Sequelize } = require("sequelize");

const db new Sequelize({
    host: "localhost",
    database: "cars_db",
    port: 5432,
    username: "postgres",
    password: "root",
    dialect: "postgre",
});

module.exports = db;
-----

## Comprobar la conexción de la base de datos

Vamos usar el metodo authernticate() para comprobar la conexión 

*Cómo se hace?* 

En app.js

- importamos la instancia db que creamos
- usamos el metodo auntenticate

## Modelos 

Necesitamos una carpeta de modelos

dentro de la carpeta vamops a tener un archivo llamado
users.molel.js


-console.log(process.env); * variable de entorno *