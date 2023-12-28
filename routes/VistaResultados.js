const { Router } = require('express');
const { getVistaResultados } = require('../controller/VistaResultadosController');
const router = Router();

router.get('/:Nombre', getVistaResultados);

module.exports = router;
