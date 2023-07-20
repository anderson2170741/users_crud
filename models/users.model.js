const { DataTypes } = require('sequelize');
const {db} = require('../utils/database');

// todas las tablas van en plural
const Users = db.define('users', {
    // por defecto sequelize crea el id como pk y autoincrementable
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING(30),
        defaultValue: 'Jhon',
    },
    lastname: {
        type: DataTypes.STRING(30),
        defaultValue: 'Doe',
    },
    email: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});

module.exports = Users;