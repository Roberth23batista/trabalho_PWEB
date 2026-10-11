const router = require('express').Router();
const criar = require("../comandos/criar");
const apagar = require("../comandos/apagar");
const atualizar = require("../comandos/atualizar");
const listar = require("../comandos/listar");

router.get('/', listar.listarDespesa);
router.post('/', criar.criarDespesa);
router.put('/:id', atualizar.atualizarDespesa);
router.delete('/:id', apagar.apagarDespesa);

module.exports = router;