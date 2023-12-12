
const { Router } = require('express');
const {
    getResultadosAnalisis,
    getResultadoAnalisis,
    postResultadoAnalisis,
    putResultadoAnalisis,
    deleteResultadoAnalisis,
    
} = require('../controller/ResultadosAnalisisController');

const router = Router();

router.get('/', getResultadosAnalisis);
router.get('/:id', getResultadoAnalisis);
router.post('/', postResultadoAnalisis);
router.put('/:id', putResultadoAnalisis);
router.delete('/:id', deleteResultadoAnalisis);

module.exports = router;
