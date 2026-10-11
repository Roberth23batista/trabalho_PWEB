const router = require('express').Router();
const criar = require("../comandos/criar");
const apagar = require("../comandos/apagar");
const atualizar = require("../comandos/atualizar");
const listar = require("../comandos/listar");

router.get('/', listar.listarAgendamento);
router.post('/', criar.criarAgendamento);
router.put('/:id', atualizar.atualizarAgendamento);
router.delete('/:id', apagar.apagarAgendamento);

module.exports = router;