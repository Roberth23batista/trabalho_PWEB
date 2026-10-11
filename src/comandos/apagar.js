//por: marcello Otávio Soares dos Santos
const { Usuario, Despesa, Agendamento } = require('../models');

const apagar = (Model, nome) => async (req, res) => {
    try {
        const item = await Model.findByPk(req.params.id);
        if (!item) return res.status(404).json({ erro: `${nome} não encontrado` });
        await item.destroy();
        return res.status(200).json({ mensagem: `${nome} apagado com sucesso` });
    } catch (err) {
        return res.status(500).json({ erro: err.message });
    }
};

exports.apagarUsuario = apagar(Usuario, 'Usuário');
exports.apagarDespesa = apagar(Despesa, 'Despesa');
exports.apagarAgendamento = apagar(Agendamento, 'Agendamento');
