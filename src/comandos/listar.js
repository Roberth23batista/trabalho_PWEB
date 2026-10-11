const { Usuario, Despesa, Despesa } = require('../models');

const listar = (Models, nome, include = []) => async (req, res) =>{
    try{
        const item = await Models.findAll({ include });

        return res.status(200).json(item)
    } catch (error) {
        return res.status(500).json({ erro: `Erro ao listar ${nome}`, detalhes: error.message });
    }
}

module.exports = {
    listarUsuario: listar(Usuario, 'usuários'),
    listarDespesa: listar(Despesa, 'despesas', [{ model: Usuario, as: 'usuario' }]),
    listarAgendamento: listar(Agendamento, 'agendamentoss', [{ model: Usuario, as: 'usuario' }]),
};
//por: Roberth batista da Silva
//Eu queria dizer uma coisa: hakuna matata