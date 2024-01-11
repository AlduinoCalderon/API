const { Router } = require('express');
const { getMedicosEsp, getMedicoEsp, createMedicoEsp, updateMedicoEsp, deleteMedicoEsp } = require('../controller/MedEspController');
const router = Router();
router.get('/', getMedicosEsp);
router.get('/:id', getMedicoEsp);
router.post('/', createMedicoEsp);
router.put('/:id', updateMedicoEsp);
router.delete('/:id', deleteMedicoEsp);

module.exports = router;