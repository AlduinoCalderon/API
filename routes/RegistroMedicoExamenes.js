const { Router } = require('express');
const {
    getRegistrosMedicosExamenes,
    getRegistroMedicoExamen,
    postRegistroMedicoExamen,
    putRegistroMedicoExamen,
    deleteRegistroMedicoExamen
} = require('../controller/RegistroMedicoExamenController');

const router = Router();

router.get('/', getRegistrosMedicosExamenes);
router.get('/:id', getRegistroMedicoExamen);
router.post('/', postRegistroMedicoExamen);
router.put('/:id', putRegistroMedicoExamen);
router.delete('/:id', deleteRegistroMedicoExamen);

module.exports = router;