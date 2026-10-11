const { DataTypes } = require('sequelize');

const sequelize = require('../database');

module.exports = sequelize.define('Usuario', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },

    nomeMedico: {
        type: DataTypes.STRING,
        allowNull: false
    }
})