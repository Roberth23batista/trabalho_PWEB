const { DataTypes } = require('sequelize');

const sequelize = require('../database');

module.exports = sequelize.define('Agendamento', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },

    nomeMedico: {
        type: DataTypes.STRING,
        allowNull: false
    }
}) 