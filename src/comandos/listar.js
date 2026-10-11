const { Usuario, Despesa, Consulta } = require('../models');

const listar = (Models, nome, includes = []) => async (req, res) =>{
    try{
        const item = await Models.findAll({ includes });

        return res.status(200).json(item)
    } catch (error) {
        return res.status(500).json({ erro: `Erro ao listar ${nome}`, detalhes: error.message });
    }
}

module.exports = {
    listarUsuarios: listar(Usuario, 'usuários'),
    listarDespesas: listar(Despesa, 'despesas', [{ model: Usuario, as: 'usuario' }]),
    listarConsultas: listar(Consulta, 'consultas', [{ model: Usuario, as: 'usuario' }]),
};

//por: Roberth batista da Silva
//Eu queria dizer uma coisa: hakuna matata