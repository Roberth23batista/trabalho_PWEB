const { Usuario, Agendamento, Consulta } = require('../models');

const atualizar = (Model, nome) => async (req, res) => {
    try {
        const item = await Model.findByPk(req.params.id);
        if(!item){
            return res.status(404).json({erro: `${nome} não foi encontrado`})
        }

        await item.update(req.body);
        return res.status(200).json({mensage: `${nome} foi atualizado com sucesso!`})
    } catch (error) {
        return res.status(500).json({ erro: `Erro ao atualizar ${nome}`, detalhes: error.message })
    }
}

module.exports = {
    atualizarUsuario: atualizar(Usuario, 'Usuário'),
    atualizarAgendamento: atualizar(Agendamento, 'Agendamento'),
    atualizarDespesa: atualizar(Despesas, 'Despesa'),
};

//por: Roberth batista da Silva
//Eu queria dizer uma coisa: boom shaka laka