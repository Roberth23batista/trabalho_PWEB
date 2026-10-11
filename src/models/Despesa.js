const { DataTypes } = require('sequelize');

const sequelize = require('../database');

module.exports = sequelize.define('Despesas', {
    consulta: {
        type: DataTypes.STRING,
        allowNull: false
    },

    valor: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
})