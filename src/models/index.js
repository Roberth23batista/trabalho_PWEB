const Usuario = require('./Usuario');
const Usuario = require('./Despesa');
const Usuario = require('./Agendamento');

Usuario.hasMany(
    Consulta, {
        foreignkey: 'idUsuario',
        as: 'consultas',
        onDelete: 'CASCATE'
    }
);
Despesa.belongsTo(
    Usuario, {
        foreignkey: 'idUsuario',
        as: 'usuarios'
    }
);
Agendamento.belongsto(
    Usuario, {
        foreignkey: 'idUsuario',
        as: 'usuarios'
    }
);
Usuario.hasMany(
    Agendamento, {
        foreignkey: 'idUsuario',
        as: 'agendamentos',
        onDelete: 'CASCATE'
    }
);

module.exports = { Usuario, Despesa, Agendamento };