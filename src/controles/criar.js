const { Usuario, Despesa, Agendamento } = require('../models');

const criar = (Model, nome) => async (req, res) => {
    try {
        const item = await Model.create(req.body);
        return res.status(201).json({ mensagem: `${nome} criado com sucesso`, item });
    } catch (err) {
        return res.status(500).json({ erro: err.message });
    }
};

exports.criarUsuario = criar(Usuario, 'Usuário');
exports.criarDespesa = criar(Despesa, 'Despesa');
exports.criarAgendamento = criar(Agendamento, 'Agendamento');