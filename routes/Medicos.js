const { Router } = require('express');
const { getMedicos, getMedicoById, createMedico, updateMedico, deleteMedico } = require('../controller/MedicoController');
const router = Router();
router.get('/', getMedicos);
router.get('/:id', getMedicoById);
router.post('/', createMedico);
router.put('/:id', updateMedico);
router.delete('/:id', deleteMedico);

module.exports = router;
