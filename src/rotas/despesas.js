const router = require('express').Router();
const criar = require("../controles/criar");
const apagar = require("../controles/apagar");
const atualizar = require("../controles/atualizar");
const listar = require("../controles/listar");

router.get('/', listar.listarDespesa);
router.post('/', criar.criarDespesa);
router.put('/:id', atualizar.atualizarDespesa);
router.delete('/:id', apagar.apagarDespesa);

module.exports = router;