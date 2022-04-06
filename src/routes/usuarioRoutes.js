const { Router } = require('express');
const usuarioController = require('../controllers/UsuarioController'); 

const router = new Router();

router.post('/', usuarioController.store); // Cria usuários
router.get('/', usuarioController.index); // Lista usuários
router.get('/:id', usuarioController.show); //Lista um usuário especifico
router.put('/:id', usuarioController.update); //Atualiza usuários


module.exports = router;