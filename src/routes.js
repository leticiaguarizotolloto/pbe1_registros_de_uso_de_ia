
const express = require('express');
const router = express.Router();

const usuario = require('./controllers/usuario');
const usoia = require('./controllers/usoia');

// Rotas de usuários
router.get('/usuario', usuario.listar);
router.get('/usuario/:id', usuario.buscar);
router.post('/usuario', usuario.criar);
router.put('/usuario/:id', usuario.atualizar);
router.delete('/usuario/:id', usuario.excluir);
router.post('/login', usuario.login);

// Rotas de uso de IA
router.get('/usoia/resumo/riscos', usoia.resumo);
router.get('/usoia', usoia.listar);
router.get('/usoia/:id', usoia.buscar);
router.post('/usoia', usoia.criar);
router.put('/usoia/:id', usoia.atualizar);
router.delete('/usoia/:id', usoia.excluir);

module.exports = router;
