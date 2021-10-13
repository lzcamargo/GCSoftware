var express = require('express');
var router = express.Router()
var estudante = require('../controller/estudante');

router.get('/estudante', estudante.all);
router.post('/estudante', estudante.create);
router.get('/estudante/:estudante_matr', estudante.byMatricula);
router.get('/estudante/search/:name', estudante.search);
router.put('/estudante/:estudante_matr', estudante.update);
router.delete('/estudante/:estudante_matr', estudante.delete);

module.exports = router;


