const router = require('express').Router();
const criar = require("../controles/criar");
const apagar = require("../controles/apagar");
const atualizar = require("../controles/atualizar");
const listar = require("../controles/listar");

router.get('/', listar.listarAgendamento);
router.post('/', criar.criarAgendamento);
router.put('/:id', atualizar.atualizarAgendamento);
router.delete('/:id', apagar.apagarAgendamento);

module.exports = router;