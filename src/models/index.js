const Usuario = require('./Usuario');
const Despesa = require('./Despesa');
const Agendamento = require('./Agendamento');

Usuario.hasMany(
    Despesa, {
        foreignKey: 'idUsuario', 
        as: 'despesas', 
        onDelete: 'CASCADE' 
    });

Despesa.belongsTo(
    Usuario, { 
        foreignKey: 'idUsuario',
        as: 'usuario' 
    }
);

Usuario.hasMany(
    Agendamento, { 
        foreignKey: 'idUsuario', 
        as: 'agendamentos', 
        onDelete: 'CASCADE' 
    }
);

Agendamento.belongsTo(
    Usuario, { 
        foreignKey: 'idUsuario', 
        as: 'usuario' 
    }
);

module.exports = { Usuario, Despesa, Agendamento };