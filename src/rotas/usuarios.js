const router = require('express').Router();
const criar = require("../comandos/criar");
const apagar = require("../comandos/apagar");
const atualizar = require("../comandos/atualizar");
const listar = require("../comandos/listar");

router.get('/', listar.listaUsuario);
router.post('/', criar.criarUsuario);
router.put('/:id', atualizar.atualizarUsuario);
router.delete('/:id', apagar.apagarUsuario);

module.exports = router;